type userProps = {

     name : string;
     age : number;
}

function DemoUserCard({name , age }: userProps) {

      return (

         <div>
            <h2>{name}</h2>
            <h2>{age}</h2>
         </div>
      )
}

export default DemoUserCard;