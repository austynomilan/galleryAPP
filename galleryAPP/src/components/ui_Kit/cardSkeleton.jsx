import Skeleton from "react-loading-skeleton"

export default function cardSkeleton({numCards}) {

  return (
    Array(numCards).fill(0).map((cds, indx) =>(
        <div className='card_skeleton' key={cds.indx}>
      <div className="img_skeleton">
        <Skeleton width={150} height={150} borderRadius={6}/>
      </div>
    </div>
  )
    ))
  
}
