import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store';
import { Button } from 'react-bootstrap';

const ChannelCard ({ChannelDetails, handleClick}) => {
    const {name, id} = ChannelDetails;
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{ChannelDetails.description}</p>
                <Link to={`/channels/}${id}`} className="btn btn-primary">View</Link>
                <Button onClick={() => handleClick(id)} className="btn btn-primary">Follow</Button>
            </div>