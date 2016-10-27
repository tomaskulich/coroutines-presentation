 III

 firebase.child('events/123/city').set('Bratislava')

 III

 firebase.child('events/123/').on('value', function(value) {
   alert(value)
 })

 III

 const ListenEventDetails = listenFirebase(
   (props) => props.firebase.child('events').child(props.id),
   (dispatch, props, data) => {
     dispatch(onDetails, [props.id, data])
   }
 )

 III

 render() {
   const event = props.events[props.id]
   return <div>
     <ListenEventDetails id = {props.id} />
     {event != null ?
       <div>
         <input value={event.owner} />
         <input value={event.description} />
         ...
       </div>
      :
       <div> 'Loading...' </div>
     }
   </div>
 }

III
