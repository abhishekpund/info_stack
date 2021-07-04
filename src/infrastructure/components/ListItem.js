import React,{Component} from "react";
import {View,Text,StyleSheet,TouchableWithoutFeedback,Platform,UIManager,LayoutAnimation} from "react-native";
import {connect} from "react-redux";
import {CardSection} from "../components/common";
import * as actions from "../../application/actions";

class ListItem extends Component {
    componentDidUpdate() {
        if(Platform.OS === "android") {
            if(UIManager.setLayoutAnimationEnabledExperimental) {
                UIManager.setLayoutAnimationEnabledExperimental(true);
            }
        }
        LayoutAnimation.easeInEaseOut();
    }

    renderDescription = () => {
        const {library, expanded} = this.props;

        if(expanded) {
            return (
                <CardSection>
                    <Text style={{flex: 1}}>
                        {library.description}
                    </Text>
                </CardSection>
            );
        }
    } 

    render() {
        const {id, title} = this.props.library;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        paddingLeft: 15,
    },
});

//ownProps are same as this.props. ( ownProps = this.props )
const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
}

export default connect(mapStateToProps, actions)(ListItem);