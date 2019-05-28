import React from 'react';

class Scoreboard extends React.Component {
    render() {
        return (
            <div>
                <div id="frame">
                    <div className="frameName">1</div>
                    <div className="scoring">
                        <div className="roll1">1</div>
                        <div className="roll2">2</div>
                    </div>
                    <div className="frameScore">3</div>
                </div>
                <div id="frame">
                    <div className="frameName">1</div>
                    <div className="scoring">
                        <div className="roll1">1</div>
                        <div className="roll2">2</div>
                    </div>
                    <div className="frameScore">3</div>
                </div>
                <div id="frame">
                    <div className="frameName">1</div>
                    <div className="scoring">
                        <div className="roll1">1</div>
                        <div className="roll2">2</div>
                    </div>
                    <div className="frameScore">3</div>
                </div>

            </div>
        )
    }
}

export default Scoreboard