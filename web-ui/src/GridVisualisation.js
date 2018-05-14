import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import createClass from 'create-react-class';
import NumberSquare from './NumberSquare';
import TopUsers from './ParallelBrushAxes';
import { _ } from "jquery";
import NumTweet from './NumberTweet';
import Sentiment from './TweetSentiment';
import NumRetweet from './NumberRetweet';
import UtentiUnici from './UtentiUnici';
import TimeSeries from './TimeSeries';
var Ajv = require('ajv');


var VisualisationGrid = createClass({
    render: function (){
        return (<div>
                    <Container className='GridViz'>
                        <Row>
                          <Col md="4" className="col-1">
                                <div className="NumTweet">
                                    Numero di Tweet
                                    <NumTweet maxValue={10}/>
                                </div>
                          </Col>
                          <Col md="4" className="col-2">
                                <div className="NumRetweet">
                                     Top 10 Retweet
                                     <NumRetweet />
                                </div>
                          </Col>
                          <Col md="4" className="col-3">
                                <div className="TweetSentiment">
                                     Tweet Sentiment
                                     <Sentiment />
                                </div>
                          </Col>
                        </Row>

                        <Row>
                          <Col md="4" className="col-1">
                                <div className="UserUnique">
                                    Utenti unici nel tempo
                                     <UtentiUnici />

                                </div>
                          </Col>
                          <Col md="4" className="col-2">
                                <div className="TopUsers">
                                     Top 10 users
                                    <TopUsers />
                                </div>
                          </Col>
                          <Col md="4" className="col-3">
                                <div className="StreamTweet">
                                     Tweet stream
                                     <TimeSeries />
                                </div>



                          </Col>
                        </Row>
                    </Container>
                </div>)
    },
});



export default VisualisationGrid;