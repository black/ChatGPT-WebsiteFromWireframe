const getChatResponse = (message) => {
    fetch('/question', {
        method: 'POST',
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prompt: message
        })
    }).then(res => res.json()).then(json => {
        const msg = json.choices[0].text
        console.log(msg)
        $('#response').text(msg)
    })
}

$('#ask').on('click', () => {
    const msg = $('#question').val()
    getChatResponse(msg)
    console.log(msg)
})
 


// const raw = JSON.stringify({
//     "user_app_id": {
//       "user_id": "salesforce",
//       "app_id": "blip"
//     },
//     "inputs": [
//         {
//             "data": {
//                 "image": {
//                     "url": "https://iili.io/HkOqFi7.jpg"
//                 }
//             }
//         }
//     ]
//   });
  
//   const requestOptions = {
//       method: 'POST',
//       headers: {
//           'Accept': 'application/json',
//           'Authorization': 'Key ' + 'dfb272577f21492e84feec264f470a47'
//       },
//       body: raw
//   };
  
//   // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
//   // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
//   // this will default to the latest version_id
  
//   fetch(`https://api.clarifai.com/v2/models/general-english-image-caption-blip/versions/0a62e100eb4f481ebd37cbcc16a3be0e/outputs`, requestOptions)
//       .then(response => response.json())
//       .then(result => {
//         console.log(result.status.description)
//         getChatResponse(result.status.description)
//     })
//       .catch(error => console.log('error', error));
    