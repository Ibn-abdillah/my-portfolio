import { Circles } from 'react-loader-spinner'


function Loading() {
   
  return (
    <div 
     style={{
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'center',
        marginTop : '10%'
        }}>

      <Circles
        height="80"
        width="80"
        color="orangered"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
       />
    </div>
  )
}

export default Loading