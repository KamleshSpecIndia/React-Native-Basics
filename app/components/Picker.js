import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, Platform, StyleSheet, Switch } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Toast from "react-native-toast-message";
import BackButton from "./BackButton";

const DatePicker = () => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState("date");

    const today = new Date();

    const onChange = (event, selectedDate) => {
        if (selectedDate) {
            setDate(selectedDate);
        }
        if (Platform.OS === "android") {
            setShow(false); // Auto-close on Android
        }
    };

    const showPicker = (pickerMode) => {
        setMode(pickerMode);
        setShow(true);
    };

    const closePicker = () => {
        setShow(false);
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });
    };

    const formatDateaddDesk = (date) => {
        let day = date.getDate().toString().padStart(2, '0');
        let month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
        let year = date.getFullYear();
        let hours = date.getHours().toString().padStart(2, '0'); // 24-hour format
        let minutes = date.getMinutes().toString().padStart(2, '0');
        let seconds = date.getSeconds().toString().padStart(2, '0');
        return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
    };

    return (
        <View style={styles.container}>
         <View style={ { bottom:200 , marginRight:20}} >
         <BackButton/>
            <SwitchComponentsList/>
            <Text style={styles.selectedText}>Selected: {date.toLocaleString()}</Text>
            <Text style={styles.selectedText}>Selected (US format): {formatDate(date)}</Text>
            <Text style={styles.selectedText}>Selected (Formatted): {formatDateaddDesk(date)}</Text>
            <View style={styles.verticalButton}>
                <TouchableOpacity style={styles.button} onPress={() => showPicker("date")}>
                    <Text style={styles.buttonText}>Pick a Date</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => showPicker("time")}>
                    <Text style={styles.buttonText}>Pick a Time</Text>
                </TouchableOpacity>
            </View>

            {Platform.OS === "ios" && show && (
                <Modal transparent={true} animationType="slide">
                    <View style={styles.modalBackground}>
                        <View style={styles.modalContainer}>
                            <View style={styles.header}>
                                <TouchableOpacity onPress={closePicker}>
                                    <Text style={styles.doneText}>Done</Text>
                                </TouchableOpacity>
                            </View>
                            <DateTimePicker value={date} mode={mode} display="inline" maximumDate={today} onChange={onChange} />
                        </View>
                    </View>
                </Modal>
            )}

            {Platform.OS === "android" && show && (
                <DateTimePicker value={date} mode={mode} display="default" maximumDate={today} onChange={onChange} />
            )} 
         </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    selectedText: {
        fontSize: 18,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "blue",
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
    },
    modalBackground: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContainer: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 10,
    },
    doneText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "blue",
    },
    verticalButton: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
});

export default DatePicker;

const SwitchComponentsList = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = (value) => {
        setIsEnabled(value);
        if (value) {
            showToast("Switch is ON");
        } else {
            showToast("Switch is OFF");
        }
    };

    const showToast = (message) => {
        Toast.show({
            type: "success",
            text1: message,
        });
    };

    return (
        <View>

            <Text style={styles.label}>
                {isEnabled ? "Switch On" : "Switch Off"}
            </Text>
            <Switch
                value={isEnabled}
                onValueChange={toggleSwitch}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
            />
        </View>
    );
};