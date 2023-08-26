import React from 'react';
import { Link } from 'react-router-dom';
import {  useState, useEffect } from 'react';  
import Videos from './Videos';
import ChannelCarrd from './ChannelCard';
import {fetch} from ".../src/api/fetch"

export default function ChannelDetail() {
    const {channelDetail, setChannelDetail} = useState(null);
    const {channelVideos, setChannelVideos} = useState([]);
    const {channelSubscribers, setChannelSubscribers} = useState([]);
    const {channelViews, setChannelViews} = useState("");
    const {channelComments, setChannelComments} = useState('');
    const {channelLikes, setChannelLikes} = useState('');
    const {channelDislikes, setChannelDislikes} = useState('');
    const {channelShares, setChannelShares} = useState('');
    const {channelLikesCount, setChannelLikesCount} = useState('');
    const {channelDislikesCount, setChannelDislikesCount} = useState('');

    
   
