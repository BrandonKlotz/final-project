import React, { Component } from 'react';
import { connect } from 'react-redux';

import { join } from 'lodash';

class SentenceResults extends Component {

  render() {

    const sentences = this.props.displayResults.sentences_tone.map(function(sentence) {

      return (
          <div
            key={sentence.sentence_id}
            className={join(sentence.tones.map(tone => {
<<<<<<< HEAD
              return(tone.tone_id)
            }), " ")}>
              {sentence.text}
          </div>)
=======
              return(tone.tone_id);
            }), " ")}>
              {sentence.text}
          </div>);
>>>>>>> origin/server-clean
    });


    return (
      <div className="SentenceResults">
        {sentences}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		displayResults: state.displayResults
<<<<<<< HEAD
	}
}
=======
	};
};
>>>>>>> origin/server-clean

export default connect(mapStateToProps, null)(SentenceResults);
