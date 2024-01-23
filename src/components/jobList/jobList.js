import React from 'react'
import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import styles from "./jobList.module.css";
import Card from 'react-bootstrap/Card';

const Joblist = () => {
  const [jobPostings, setJobPostings] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMorePostings, setHasMorePostings] = useState(true);
  const [currentPageIds, setCurrentPageIds] = useState([]);

  useEffect(() => {

    fetchJobPostings();

  }, [page]);

  const fetchJobPostings = async () => {
      try {
        const response = await fetch(
          `https://hacker-news.firebaseio.com/v0/jobstories.json`
        );
       const jobIds = await response.json();
      const startIdx = (page - 1) * 6;
      const endIdx = startIdx + 6;
      const newPageIds = jobIds.slice(startIdx, endIdx);

         if (newPageIds.length === 0) {
          setHasMorePostings(false);
          return;
        }

         setCurrentPageIds(newPageIds);

        const jobPromises = newPageIds.map(async (jobId) => {
          const jobResponse = await fetch(
            `https://hacker-news.firebaseio.com/v0/item/${jobId}.json`
          );
          return await jobResponse.json();
        });

        const jobs = await Promise.all(jobPromises);
        if (page === 1) {
        // Set only the first 6 jobs on initial load
        setJobPostings(jobs);
      } else {
        // Concatenate new jobs with previous jobs on "Load More"
        setJobPostings((prevPostings) => [...prevPostings, ...jobs]);
      }

      } catch (error) {
        console.error('Error fetching job postings:', error);
      }
    };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
   <Container>
  <Row>
    {jobPostings.map((job) => (
      <Col lg={12} key={job.id}>
        <Card style={{ marginBottom: '20px' }}>
          <Card.Body>
            <Card.Title 

              style={{ 
                cursor: job.url ? 'pointer' : 'default', 
              }}
              onMouseEnter={(e) => { if (job.url) e.target.style.textDecoration = 'underline'; }}
              onMouseLeave={(e) => { if (job.url) e.target.style.textDecoration = 'none'; }}
            >
              {job.url ? (
              // If there's a URL, make the job title a link that opens in a new window
                <a href={job.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                  {job.title}
                </a>
              ) :  (<span>{job.title}</span>)}

            </Card.Title>

            <Card.Subtitle className="mb-2 text-muted">       
             <strong> Posted by:</strong> {job.by} 
            <span style={{ marginLeft: '20px' }}><strong>on:</strong></span>{' '}
             {new Date(job.time * 1000).toLocaleString()}
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
  {hasMorePostings && currentPageIds.length > 0 && jobPostings.length > 0 && (
    <Row>
      <Col lg={12} className="text-center" style={{ marginTop: '20px' }}>
        <button className="btn btn-primary" onClick={handleLoadMore}>
          Load More
        </button>
      </Col>
    </Row>
  )}
</Container>


  );
};

export default Joblist;