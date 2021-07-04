import React,{Component} from "react";
import {FlatList} from "react-native";
import {connect} from "react-redux";
import ListItem from "../infrastructure/components/ListItem";

class LibraryList extends Component {
    renderItem = (library) => {
        return <ListItem library={library}/>
    }
    
    render() {
        return (
            <FlatList
                data={this.props.libraries}
                keyExtractor={(library) => library.id}
                renderItem={({item}) => this.renderItem(item)}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return { libraries: state.libraries };
}

export default connect(mapStateToProps) (LibraryList);