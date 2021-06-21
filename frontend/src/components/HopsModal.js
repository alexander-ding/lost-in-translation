import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Button, Modal } from 'semantic-ui-react';
import { MAX_HOPS } from '../utils';
import LanguageItem from './LanguageItem';

const getStyle = (style, snapshot) => {
  if (!snapshot.isDropAnimating) {
    return style;
  }
  return {
    ...style,
    // cannot be 0, but make it super tiny
    transitionDuration: `0.01s`,
  };
}

const HopsModal = ({ isOpen, setIsOpen, hops, currentLanguage, languages, updateLanguage, deleteLanguage, addRandomLanguage, handleOnDragEnd }) => {
  return <Modal open={isOpen} onClose={() => setIsOpen(false)} size='large' centered={false}>
    <Modal.Header style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      Intermediate Languages
      <Button
        primary
        onClick={addRandomLanguage}
        style={{ marginLeft: 'auto' }}
        disabled={hops.length === MAX_HOPS}
      >
        Add
      </Button>
    </Modal.Header>
    <Modal.Content>
      <DragDropContext
        onDragEnd={handleOnDragEnd}
      >
        <Droppable droppableId='languages'>
          {(droppableProvided) => (
            <div
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
            >
              {hops.map((hop, index) =>
                <Draggable key={index} draggableId={index.toString()} index={index}>
                  {(draggableProvided, draggableSnapshot) => (
                    <LanguageItem
                      key={index}
                      languages={languages}
                      value={hop}
                      updateValue={v => updateLanguage(index, v)}
                      deleteSelf={() => deleteLanguage(index)}
                      previousLanguage={index === 0 ? currentLanguage : hops[index - 1]}
                      nextLanguage={index === (hops.length - 1) ? currentLanguage : hops[index + 1]}
                      provided={draggableProvided}
                      snapshot={draggableSnapshot}
                      style={getStyle(draggableProvided.draggableProps.style, draggableSnapshot)}
                    />
                  )}
                </Draggable>
              )}
              {droppableProvided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Modal.Content >
    <Modal.Actions>
      <Button
        content="Save"
        labelPosition='right'
        icon='save'
        onClick={() => setIsOpen(false)}
        primary
      />
    </Modal.Actions>
  </Modal >
}

export default HopsModal;