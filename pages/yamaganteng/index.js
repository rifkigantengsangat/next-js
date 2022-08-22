export default function yamaganteng (props) {
    console.log(props)
    return (
        <div className='text-center bg-red-500 w-full'>Ok</div>
    )
}
export async function getServerSideProps (context){
  console.log(context)
    return{
        props:{

        }
    }

}