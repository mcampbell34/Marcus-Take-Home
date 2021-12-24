import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { Fragment } from 'react';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Question Response</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <div>
        <h1>
          Marcus Campbell Take Home Assignment
        </h1>
    </div>

<div className={div}> 
        <a href="/search" className={styles.card}>
            <h1>Question 3a</h1>
            <ul> 
              <h3> My top 5 favorite task included:</h3>
                <li>Help train and onboard new support teammates</li>  
                <li> Manage a support team </li> 
                <li> Run ticket review sessions to make sure tone is consistent</li>
                <li> Work with engineering teams during incidents and provide updates to internal and external stakeholders</li>
                <li> Find and recruit teammates for the support team</li>
              </ul>  
              <ul> 
                <h3> My top 5 least favorite task included:</h3>
                <li>Help resolve billing issues for customers</li>
                <li>Dig through logs to troubleshoot a customers broken project</li>
                <li>Respond to 50+ support requests via email every day </li>
                <li>Analyze hundreds of support tickets to spot trends the product team can use</li>
                <li>Identify, file (and, where possible, resolve) bugs in private and public Vercel/Next.js repos on GitHub</li>
              </ul>
              </a>
  </div> 
          
          
<div className={div}>
          <a  className={styles.card}>
            <h2>Question 3b</h2>
            <p>
            I would really like to take advantage of this opportunity by refining my react and javascript skills. 
              I plan on doing this by taking advantage of the learning fund to enroll in Udemy courses that are centered
              around these two languages. Something that I am passionate about is supporting my teammates when it comes to 
              understanding the technical aspects of the web such as how to use tools such a cURL, mtr, and even dig to
              </p>
          </a>

          <a  className={styles.card}>
            <h2>Question 3c</h2>
            <p>




            </p>
          </a>
</div> 

<div className={div}> 
          <a className={styles.card}>
            <h2>Question 3e</h2>
            <p>
              
            One way to redirect is to add the following snippet within the guide below within your next.config.js file if you are using Next.js or within the vercel.json file if you are using something different:
            (https://vercel.com/support/articles/does-vercel-support-permanent-redirects?query=redire#in-application-redirects).

             By implementing the suggestions within the guide, you will see a 307 response code on your request. You can use this command to see an example of the redirect behavior, curl -svo dev/null https://marcus-take-home-h8t2a3oaz-mcampbell34.vercel.app/search
             Additionally, you can use the -L flag via cURL to follow the 308 redirect to a 200 which is where the object now lives.

             Keep in mind that you will need to change permanent to false in order for a temporary redirect to occur, if it is true then you will see a permanent redirect. 
             
             If you have already viewed this guide and still have questions, please share some insight on the challenges you ran into and I will be more than happy to help.
             </p>
             </a> 
</div> 


<div className={div}> 
         <a className={styles.card}>

           <h2>Question 3f</h2>
            <p>
              To use your GoDaddy domain with Vercel, you can follow these steps: https://vercel.com/guides/transferring-domains-to-vercel. 
              If you have already viewed this guide and still have questions, please share some insight on the challenges you ran into and I will be more than happy to help.
            </p>
        </a>
</div> 

<div className={div}> 
           <a className={styles.card}> 
           <h2>Question 3g</h2> 
            <p>
            From what I encountered and what I know is common is that customers may want to use their own domains instead of the one provided by Vercel. With this comes, 
            educating the customer on how they can navigate through the UI and configure
            their site accordingly. Additionally, the customer may come across issues where they make changes and are not seeing them right away which can be handled via purge request to clear anything in cache and then refetch the correct object from the origin and apply the new settings on the new object.
            </p> 
            </a> 
           <a className={styles.card}>
           <h2>Question 3h</h2>
            <p>
            This process overall was great, very straight forward and to the point. While I did not spend too much time making my site fancy, I did have fun brushing up on my Git, Github, HTML, and react skills. I know I will need to put aside some time to get back into using the git command line and react as I have not used it since attending Lambda but, after playing around with the code I was able to snap back and produce a decent project. 
            </p>
          </a>
        </div>
      </div>  
  )
}