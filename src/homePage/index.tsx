import React, { useState } from 'react';
import { KeyboardAvoidingView, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Platform } from 'react-native';

import { Task } from '../componentsTask';
import { styles } from './styles';

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
                        placeholder= 'Digite sua tarefa 😍😎'
                        value={task}
                        onChangeText={text => setTask(text)} />
                    <TouchableOpacity onPress={() => handleAddTask()}>
                        <View style={styles.addWrapper}>
                            <Text style={styles.addText}>+</Text>
                        </View>
                    </TouchableOpacity>
                </KeyboardAvoidingView>

            </View>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps='handled'
                style={styles.items}>
                {
                    taskItems.map((item: any, index: any) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                                <Task text={item} />
                            </TouchableOpacity>
                        );
                    })
                }
            </ScrollView>
        </View>
    );
}
