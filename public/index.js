import React from 'react';
import ReactDOM from 'react-dom';
import ReactDraggableTree from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  state = {
    items: [
      {
        icon: 'm1-icon',
        label: 'Menu1',
        value: 'm1',
        children: [
          {
            icon: 'm1-1-icon',
            label: 'Menu1-1',
            value: 'm1-1',
            children: [
              {
                icon: 'm1-1-1-icon',
                label: 'Menu-1-1',
                value: 'm1-1-1'
              },
              {
                icon: 'm1-1-2-icon',
                label: 'Menu-1-2',
                value: 'm1-1-2'
              }
            ]
          }
        ]
      },
      {
        icon: 'm2-icon',
        label: 'Menu2',
        value: 'm2'
      },
      {
        icon: 'mxx-icon',
        label: '-',
        value: '-'
      },
      {
        disabled: false,
        icon: 'm3-icon',
        label: 'Menu3',
        value: 'm3'
      }
    ]
  };

  template = ({ item, independent, sortable }, cb) => {
    if (independent) {
      return (
        <li key={item.value} className="is-node is-leaf">
          <label className={'is-label'}>{item.label}</label>
        </li>
      );
    } else {
      return (
        <li key={item.value} className={'is-node'}>
          <label className="is-label">{item.label}</label>
          <ul className="is-nodes" ref={sortable}>
            {cb()}
          </ul>
        </li>
      );
    }
  };

  render() {
    return (
      <div className="app-container">
        <h3>Sort only children:</h3>
        <ReactDraggableTree template={this.template} items={this.state.items} />
        <h3>Sort only children - disabled:</h3>
        <ReactDraggableTree
          template={this.template}
          items={this.state.items}
          disabled
        />

        <hr />
        <h3>Sort with grouped:</h3>
        <ReactDraggableTree
          template={this.template}
          items={this.state.items}
          options={{ group: 'abcd' }}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));