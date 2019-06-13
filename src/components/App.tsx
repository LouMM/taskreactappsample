import * as React from 'react';

import Card from './card';
import PageMap from './leafletmap';

export interface Page {
  color: string;
}
export class App extends React.Component<Page, {}> {
  render() {
    const cardTitle = "Card 1";
    const cardTextContents = "The color of this page is:"

    return (
      <div className='pagecontainer'>
        <div className="mapcontainer">
          <PageMap></PageMap>
        </div>
        <div className="cardcontainer">
          <Card></Card><Card></Card><Card></Card><Card></Card>
          <Card></Card><Card></Card><Card></Card><Card></Card>
          <Card></Card><Card></Card><Card></Card><Card></Card>
        </div>
      </div>
    );
  }
}

export default App;