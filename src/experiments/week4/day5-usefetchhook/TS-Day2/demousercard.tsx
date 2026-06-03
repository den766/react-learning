type userProps = {

     name : string;
     age : number;
}

function DemoUserCard(props : userProps) {

      return (

         <div>
            <h2>{props.name}</h2>
            <h2>{props.age}</h2>
         </div>
      )
}

export default DemoUserCard;