import React from "react";
import {
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";


const Jadwal = [
  {
    id: "1",
    departureCity: "Bandar Lampung",
    arrivalCity: "Jakarta",
    airline: "Elang",
    departureDate: "5 Mar 2022, 10:00",
    arrivalDate: "6 Mar 2022, 09:00",
  },
  {
    id: "2",
    departureCity: "Bandar Lampung",
    arrivalCity: "Manado",
    airline: "Air Asia",
    departureDate: "5 Mar 2022, 13:00",
    arrivalDate: "6 Mar 2022, 05:00",
  },
  {
    id: "3",
    departureCity: "Bandar Lampung",
    arrivalCity: "Surabaya",
    airline: "Lion Air",
    departureDate: "5 Mar 2022, 01:00",
    arrivalDate: "6 Mar 2022, 03:00",
  },
  {
    id: "4",
    departureCity: "Bandar Lampung",
    arrivalCity: "Medan",
    airline: "Sriwijaya Air",
    departureDate: "5 Mar 2022, 07:00",
    arrivalDate: "6 Mar 2022, 12:00",
  },
  {
    id: "5",
    departureCity: "Bandar Lampung",
    arrivalCity: "Banda Aceh",
    airline: "Batik Air",
    departureDate: "5 Mar 2022, 03:00",
    arrivalDate: "6 Mar 2022, 01:30",
  },
  {
    id: "6",
    departureCity: "Bandar Lampung",
    arrivalCity: "Singapore",
    airline: "Citilink",
    departureDate: "6 Mar 2022, 12:30",
    arrivalDate: "7 Mar 2022, 01:00",
  },
  {
    id: "7",
    departureCity: "Jakarta",
    arrivalCity: "Bali",
    airline: "Malindo Air",
    departureDate: "6 Mar 2022, 09:30",
    arrivalDate: "7 Mar 2022, 10:00",
  },
  {
    id: "8",
    departureCity: "Jakarta",
    arrivalCity: "Surakarta",
    airline: "Elang",
    departureDate: "6 Mar 2022, 09:00",
    arrivalDate: "7 Mar 2022, 01:30",
  },
  {
    id: "9",
    departureCity: "Bandar Lampung",
    arrivalCity: "Jogjakarta",
    airline: "AirAsia",
    departureDate: "7 Mar 2022, 01:00",
    arrivalDate: "7 Mar 2022, 24:00",
  },
];

const MainScreen = ({ navigation }) => {
  <StatusBar hidden />
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>
        {item.departureCity} - {item.arrivalCity}
      </Text>
      <View style={styles.detailContainer}>
        <View style={styles.airlineContainer}>
          <FontAwesome name="plane" size={28} color="black" />
          <Text style={styles.airline}>{item.airline}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>
            <FontAwesome5 name="plane-departure" size={15} color="black" />
            {item.departureDate}
          </Text>
          <Text style={styles.date}>
            <FontAwesome5 name="plane-arrival" size={15} color="black" />
            {item.arrivalDate}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.pop()}
          >
            <AntDesign name="arrowleft" size={30} color="#0D1321" />
          </TouchableOpacity>
          <Text style={styles.title}>Hiling.id</Text>
          <Feather name="user" size={30} color="#0D1321" />
        </View>
        <Text style={styles.subTitle}>Hasil Pencarian Penerbangan</Text>
      </View>
      <FlatList
        data={Jadwal}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.copyright}>
        © Tomu Petra Manogari Nahulae - 120140209
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C5D86D",
    marginTop: 20,
  },
  header: {
    width: "100%",
    backgroundColor: "#C5D86D",
    padding: 20,
    marginBottom: 10,
  },
  title: {
    color: "#0D1321",
    fontSize: 30,
  },
  subTitle: {
    color: "#0D1321",
    textAlign: "center",
    fontSize: 20,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  itemContainer: {
    backgroundColor: "#FFEDDF",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flex: 1,
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  airlineContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: "red",
  },
  dateContainer: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 15,
    alignItems: "space-between",
  },
  airline: {
    fontSize: 17,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  date: {
    color: "#00203FFF",
  },
  copyright: {
    color: "#0D1321",
    marginBottom: 5,
    padding: 10,
    marginTop: 5,
    textAlign: "center",
    fontSize: 10,
  },
});

export default MainScreen;