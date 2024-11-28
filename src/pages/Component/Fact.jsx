import React, { useEffect, useState, useRef } from 'react';
import '../css/Fact.css';
import FactData from '../Data/FactData';

export default function Fact() {
  return (
    <div>
      {/* Start Fun-facts */}
      <div id="fun-facts" className="fun-facts section">
        <div className="container">
          <div className="row">
            {FactData.map((value, id) => (
              <Counter key={id} value={value.index} title={value.title} />
            ))}
          </div>
        </div>
      </div>
      {/* End Fun-facts */}
    </div>
  );
}

function Counter({ value, title }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;

      let totalDuration = 2000;
      let incrementTime = (totalDuration / end) * 2;

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <div className="single-fun" ref={counterRef}>
      <div className="content">
        <span className="counter">{count}</span>
        <p>{title}</p>
      </div>
    </div>
  );
}
