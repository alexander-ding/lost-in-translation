import React from 'react';
import ReactDOM from 'react-dom';
import { Dropdown, Icon, Ref, Segment } from 'semantic-ui-react';
import { languagesToOptions } from '../utils';

const portal = document.createElement('div');
document.body.appendChild(portal);

const LanguageItem = ({ value, updateValue, languages, previousLanguage, nextLanguage, deleteSelf, provided, snapshot, style }) => {
  const actualLanguages = Object.fromEntries(Object.keys(languages).filter(key => ![previousLanguage, nextLanguage].includes(key)).map(key => [key, languages[key]]));

  const usePortal = snapshot.isDragging;
  const child = (
    <Ref
      innerRef={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      style={style}
    >
      <Segment >
        <div style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
          <Dropdown
            inline
            search
            options={languagesToOptions(actualLanguages)}
            value={value}
            onChange={(e, data) => updateValue(data.value)}
          />
          <Icon
            name='delete'
            style={{ marginLeft: 'auto', cursor: 'pointer' }}
            onClick={deleteSelf}
          />
        </div>
      </Segment>
    </Ref>
  );

  if (!usePortal) {
    return child;
  }

  // if dragging, put item into portal
  return ReactDOM.createPortal(child, portal);
}

export default LanguageItem;