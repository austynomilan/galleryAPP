import React, { useState, useEffect } from 'react';
import Navbar from '../components/Nav/nav';
import 'react-loading-skeleton/dist/skeleton.css';
import data from '../Data/data.json';
import { TouchSensor, closestCenter, DndContext, useSensor, MouseSensor, useSensors } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import CardSkeleton from '../components/ui_Kit/cardSkeleton';
import '../Home/Home.scss';

const SortableImage = ({ image }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: image.id });

  const style = {
    transition: transition ?? '',
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      style={style}
      {...listeners}
      className='image_holder'
    >
      <img src={image['image-url']} alt={image.description} />
      <span>{image.description}</span>
    </div>
  );
};

export default function authUser() {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState(data.GirlImages);
  const [search, setSearch] = useState('');
const mouse = useSensor(MouseSensor),
touch = useSensor(TouchSensor, {
  activationConstraint:{
    delay: 250,
    tolerance: 5,
  },
});

const sensors = useSensors(mouse, touch)

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }
    setImages((prevImages) => {
      const oldIndex = prevImages.findIndex((image) => image.id === active.id);
      const newIndex = prevImages.findIndex((image) => image.id === over.id);
      return arrayMove(prevImages, oldIndex, newIndex);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const handleSearchChange = (value) => {
    setSearch(value);
  };

  return (
    <>
      <div className='homeContainer'>
        <Navbar onSearchChange={handleSearchChange} search={search} />
        <div className='image_card'>
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
            <SortableContext
              items={images}
              strategy={verticalListSortingStrategy}
            >
              {loading ? (
                <CardSkeleton numCards={25} />
              ) : (
                images
                  .filter((image) =>
                    image.description
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  )
                  .map((image) => (
                    <SortableImage key={image.id} image={image} />
                  ))
              )}
            </SortableContext>
          </DndContext>
        </div>
      </div>
    </>
  );
}
