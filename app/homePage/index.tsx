import React, {useState} from 'react';
import {
    KeyboardAvoidingView,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Keyboard,
    ScrollView,
    Platform,
    StyleSheet
} from 'react-native';

import {Task} from '../componentsTask';

export function Home() {
    const [task, setTask] = useState<string | undefined>();
    const [taskItems, setTaskItems] = useState([] as any);
    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task]);
        setTask(undefined);
    }
    const completeTask = (index: any) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    }
    return (
        <View style={styles.container}>
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>Lista de Tarefas ✔</Text>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.writeTaskWrapper}
                >
                    <TextInput
                        style={styles.input}
                        placeholder='Digite sua tarefa 😍😎'
                        value={task}
                        onChangeText={text => setTask(text)}/>
                    <TouchableOpacity onPress={() => handleAddTask()}>
                        <View style={styles.addWrapper}>
                            <Text style={styles.addText}>+</Text>
                        </View>
                    </TouchableOpacity>
                </KeyboardAvoidingView>

            </View>
            <ScrollView
                contentContainerStyle={{flexGrow: 1}}
                keyboardShouldPersistTaps='handled'
                style={styles.items}>
                {
                    taskItems.map((item: any, index: any) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                                <Task text={item}/>
                            </TouchableOpacity>
                        );
                    })
                }
            </ScrollView>
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E8EAED',
        marginTop: 24,
    },
    tasksWrapper: {
        paddingTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    items: {
        marginTop: 8,
        paddingHorizontal: 32,
    },
    writeTaskWrapper: {
        position: 'relative',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 90,
    },
    input: {
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addText: {},
});
