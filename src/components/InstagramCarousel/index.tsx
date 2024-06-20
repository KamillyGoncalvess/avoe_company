import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion'
import './styles.css';

interface IFeedItem {
  id: string;
  media_type: "IMAGE" | "VIDEO"
  media_url: string;
  permalink: string;
}

export function InstagramCarousel() {
  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [feedList, setFeedList] = useState<IFeedItem[]>([]);

  async function getInstaFeed() {
    const token = process.env.REACT_APP_INSTA_TOKEN;
    const fields = "media_url,media_type,permalink";
    const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`;
  
    try {
      const { data } = await axios.get(url);
      setFeedList(data.data.slice(0, 6));
    } catch (error) {
      console.error('Error fetching Instagram feed:', error)
    }
  }

  useEffect(() => {
    getInstaFeed();
  }, []);

  useLayoutEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [feedList]);

  return (
    <div className='App'>
      <motion.div ref={carousel} className='carousel' whileTap={{ cursor: 'grabbing' }}>
        <motion.div className='inner' drag='x' dragConstraints={{ left: -width, right: 0 }}>
          {feedList.map((item, index) => (
            <motion.div className='item' key={index}>
              <img src={item.media_url} alt='instagram' />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}