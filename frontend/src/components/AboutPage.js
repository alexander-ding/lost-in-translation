import React from 'react';
import { Header } from 'semantic-ui-react';

const AboutPage = () => {
  return <>
    <Header as='h1'>About Lost in Translation</Header>
    <p>Lost in Translation explores the information that is lost in the inherent act of translation. It automates the popular internet trend that creates "bad English" versions of existing texts by translating them over and over on Google Translate, cycling through different languages before going back into English. The end result is usually something comedic, and there has been a lot of entertainment derived from trying to decipher the original text based on the bad translation (e.g., Tasty made a <a target='_blank' rel='noopener noreferrer' href='https://www.youtube.com/watch?v=pLJo7jWJQj0'>video</a> where a pastry chef attempted to follow a recipe that's been translated 20 times), but it is also illustrative of how much information is lost in translation. While it might be difficult to notice discrepancy in each step, the difference between the final version and the original text forces us to confront the fact that we are always losing some aspect of the original text every time we translate. </p>
    <p>
      Whether you're using Lost in Translation to get a good laugh (I highly encourage you pass in your favorite passages/speeches/recipes) or to gain some appreciation of the cold hard truth that translation can never be lossless and unambiguous, I appreciate you for checking it out.
    </p>
    <Header as='h2'>I love this! How can I show my appreciation 🎉?</Header>
    <p>Allow me to redirect your attention to the Source button located at the bottom right of the web page, where there is a link to the GitHub repository of this project. Star the project, open issues, and send in pull requests to help improve the project!</p>
  </>
}

export default AboutPage;