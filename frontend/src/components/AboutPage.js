import React from 'react';
import { Header } from 'semantic-ui-react';

const AboutPage = () => {
  return <>
    <Header as='h1'>About Cycle Translator</Header>
    <p>
      Cycle Translator automates the popular internet trend centered around creating "bad English" versions of existing texts by translating it over and over on Google Translate. It takes in a piece of text and passes it through Google Translate a bunch of times, cycling through different languages before translating the output back into the original language. Every step distorts the message a little—a piece of information is lost in translation, so to speak—, and you end up with a jumbled up version of the original text, full of broken grammar and close substitutions.
    </p>
    <p>
      The end result is usually something comedic, and it is always a fun challenge to try to decipher what the original text is based on the bad translation. For example, Tasty made a <a target='_blank' rel='noopener noreferrer' href='https://www.youtube.com/watch?v=pLJo7jWJQj0'>video</a> where a pastry chef attempted to follow a recipe that's been translated 20 times. I was surprised to find that there was no easy-to-use tool online to easily do this, so I spent a couple days putting this together. I hope it's helpful!
    </p>
    <Header as='h2'>I love this! How can I show my appreciation 🎉?</Header>
    <p>Allow me to redirect your attention to the Source button located at the bottom right of the web page, where there is a link to the GitHub repository of this project. Star the project, open issues, and send in pull requests to help improve the project!</p>
  </>
}

export default AboutPage;