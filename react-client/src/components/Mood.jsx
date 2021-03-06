import React from 'react';
import {Polar, Doughnut, Bar} from 'react-chartjs-2';
import data from '../../../sampleWatsonData.js';

class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emotionData: {
        labels: ["Joy", "Fear", "Disgust", "Anger", "Sadness"],
        datasets: [{
            label: 'Kanye West - Famous',
            data: [data.joy, data.fear, data.disgust, data.anger, data.sadness],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 3
        }]
      },
      emotionOptions: {
        title: {
          display: false,
          text: 'Kanye West - Famous',
          fontSize: 24
        },
      },
      languageData: {
        labels: ["Analytical", "Confident", "Tentative"],
        datasets: [{
            label: 'Kanye West - Famous',
            data: [data.analytical, data.confident, data.tentative],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 3
        }]
      },
      languageOptions: {
        title: {
          display: false,
          text: 'Kanye West - Famous',
          fontSize: 24
        }
      },
      socialData: {
        labels: ["Openness", "Conscientiousness", "Extraversion", "Agreeableness", "Emotional Range"],
        datasets: [{
            label: 'Kanye West - Famous',
            data: [data.openness, data.conscientiousness, data.extraversion, data.agreeableness, data.emotionalrange],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 3
        }]
      },
      socialOptions: {
        title: {
          display: false,
          text: 'Kanye West - Famous',
          fontSize: 24
        }
      },
    };
  }

  render() {
    return (
      <div className="item">
      <h5>Emotion</h5>
      <Bar data={this.state.emotionData} options={this.state.emotionOptions} width={500}/>
      <div className="minicol1">
      <h5>Language</h5>
      <Doughnut data={this.state.languageData} options={this.state.languageOptions} width={300}/>
      </div>
      <div className="minicol2">
      <h5>Social</h5>
      <Polar data={this.state.socialData} options={this.state.socialData} width={300}/>
      </div>
      </div>
    )
  }
}

export default Mood;