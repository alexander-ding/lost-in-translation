import React from 'react';
import { useMediaQuery } from 'react-responsive';
import TextareaAutosize from 'react-textarea-autosize';
import { Button, Dropdown, Form, Grid, Icon, Loader, Segment } from 'semantic-ui-react';
import HopsModalContainer from '../containers/HopsModalContainer';
import { languagesToOptions } from '../utils';

const HomePage = ({ translate, inputText, updateText, translatedText, languages, currentLanguage, updateLanguage, hops, updateHops, isModalOpen, setIsModalOpen, isLoading, copy }) => {
  const isNotSmall = useMediaQuery({
    query: '(min-width: 768px)'
  });

  return <>
    <HopsModalContainer hops={hops} updateHops={updateHops} isOpen={isModalOpen} setIsOpen={setIsModalOpen} languages={languages} currentLanguage={currentLanguage} />

    <Segment style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <div style={{ display: 'inline-block', marginRight: '1em' }}>
        <Dropdown
          inline
          search
          options={languagesToOptions(languages)}
          value={currentLanguage}
          onChange={(e, data) => updateLanguage(data.value)}
        />
        <span> sent through <b style={{
          cursor: 'pointer',
          textDecoration: 'underline',
          color: '#2185d0',
        }} onClick={e => setIsModalOpen(true)}>{hops.length}</b> different languages</span>
      </div>
      <Button primary style={{ marginLeft: 'auto' }} onClick={e => translate()}>Translate</Button>
    </Segment>
    <Form style={{ fontSize: '1.5em', marginBottom: '1em' }}>
      <Grid stackable columns={2} style={{ margin: 0 }}>
        <Grid.Column id='input'>
          <TextareaAutosize autoFocus minRows={4} maxRows={15} placeholder='Enter text' style={{ resize: 'none' }} value={inputText} onChange={e => updateText(e.target.value)} />
        </Grid.Column>
        <Grid.Column id='translation'>
          <Loader content='Translating...' active={isLoading} />
          {isNotSmall ?
            <textarea disabled rows={4} placeholder='Translation' style={{ backgroundColor: '#F5F5F5', resize: 'none', height: '100%' }} value={isLoading ? ' ' : translatedText} /> :
            <TextareaAutosize disabled minRows={4} placeholder='Translation' style={{ backgroundColor: '#F5F5F5', resize: 'none' }} value={isLoading ? ' ' : translatedText} />
          }
          <Icon name='copy' style={{ cursor: 'pointer', position: 'absolute', bottom: 10, right: 10 }} onClick={copy} />
        </Grid.Column>
      </Grid>
    </Form>
  </>
}

export default HomePage;
