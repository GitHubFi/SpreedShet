import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';
import Main from './components/Main';
import TopNavBar from './container/TopNavBar'
import SideNavbar from './container/SideNavBar';
import { Grid } from 'semantic-ui-react';
const columns = [
    { key: 'id', name: 'ID', dragable: true },
    { key: 'title', name: 'Title', dragable: false },
    { key: 'count', name: 'Count', dragable: true }];
const rows = [{ id: 0, title: 'row1', count: 20 }, { id: 1, title: 'row1', count: 40 }, { id: 2, title: 'row1', count: 60 }, { id: 3, title: 'row1', count: 60 }];
class App extends Component {
    render() {
        return (
            <div >
                <div >
                    <TopNavBar />
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: 1 }} >
                        <SideNavbar />
                    </div>
                    <div style={{ flex: 4 }}>
                        <Main />
                    </div>
                </div>
                {/* <ReactDataGrid
                    columns={columns}
                    rowGetter={i => rows[i]}
                    rowsCount={4}
                    minHeight={150}
                    cellNavigationMode='loopOverRow'
                    enableDragAndDrop={true} /> */}
            </div>
        );
    }
}

export default App;
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import './App.css';

// import { fetchWhiskies } from './store/action';

// import WhiskyGrid from './components/Wiskeygrid.jsx';

// class App extends Component {
//   render() {


//     return (
//       <div className="App">

//       </div>
//     );
//   }
// }
// export default App;