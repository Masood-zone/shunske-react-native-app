import { View, Text, StyleSheet, FlatList, SectionList } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    borderWidth: 3,
    borderColor: "red",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    cursor: "pointer",
  },
});

const sectionStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    cursor: "pointer",
  },
});

const explore = () => {
  return (
    <View style={sectionStyles.container}>
      <Text style={styles.title}>List of Names</Text>
      {/* Section list */}
      <SectionList
        sections={[
          { title: "Title1", data: ["Devin", "Dan", "Dominic"] },
          { title: "Title2", data: ["Jackson", "James", "Jillian"] },
          { title: "Title3", data: ["Jimmy", "Joel", "John", "Julie"] },
        ]}
        renderItem={({ item }) => (
          <Text style={sectionStyles.item}>{item}</Text>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={sectionStyles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item) => `basicListEntry-${item}`}
      />

      {/* Basic flat list */}
      <FlatList
        data={[
          { key: "Devin" },
          { key: "Dan" },
          { key: "Dominic" },
          { key: "Jackson" },
          { key: "James" },
          { key: "Joel" },
          { key: "John" },
          { key: "Jillian" },
          { key: "Jimmy" },
          { key: "Julie" },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

export default explore;
