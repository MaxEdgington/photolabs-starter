import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from 'components/PhotoList';


// Note: Rendering a single component to build components in isolation
const App = () => {


  // const sampleDataForPhotoListItem = {
  //   id: "1",
  //   location: {
  //     city: "Montreal",
  //     country: "Canada",
  //   },
  //   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  //   username: "Joe Example",
  //   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  // };

  // const tempArray = [1, 2, 3];
  // const photos = tempArray.map((item, i) => {
  //   return <PhotoListItem className="photo-list__item" imageSource={sampleDataForPhotoListItem.imageSource} profile={sampleDataForPhotoListItem.profile} key={i} username={sampleDataForPhotoListItem.username}
  //     location={sampleDataForPhotoListItem.location} />;
  // });




  return (
    <div className="App">
      <PhotoList></PhotoList>
    </div>
  );

};

export default App;
