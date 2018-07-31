import React from 'react';
import {Button} from "semantic-ui-react";
import {Link} from "react-router-dom";

export default () => (
  <div style={{display: 'flex', height: '30vh', justifyContent: 'center', alignItems: 'center', lineHeight: '2em'}}>
    <div>
      <div style={{fontSize: 18, marginBottom: 25}}>
        Mycujoo is the trusted online streaming partner of more than 450 football institutions in 5 continents. <br/>
        Live stream your matches and events, with a HD camera or a smartphone. <br/>

        Create instant replays - goals, saves, key moments; make them available live and as on demand videos. <br/>

        Specific overlays: scoreboard, live ticker, stats, line-ups etc. <br/>
      </div>
      <div style={{textAlign: 'center'}}>
        <Link to={"entities"}>
          <Button>
              Go to Entities !
          </Button>
        </Link>
      </div>
    </div>
  </div>
);