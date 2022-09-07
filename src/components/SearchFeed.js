import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

import Videos from './Videos';

import { fetchFromAPI } from '../utils/fetchFromAPI';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items));
  }, [searchTerm]);

  return (
    <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant="h5" fontWeight="bold" color="white" mb={2}>
          Search Results for: <span style={{color: '#F31503'}}>{searchTerm}'s</span> Videos
        </Typography>

        <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed;

