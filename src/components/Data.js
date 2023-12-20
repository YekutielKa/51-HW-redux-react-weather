import React from 'react'
import Form from './Form';
import Weather from './Weather';

const Data = () => {
    return (
      <div>
        <Form />
        <Weather info={this.state.weatherInfo} />
      </div>
    )
}

export default Data;