import React, { useState } from 'react'; //npm start
import { StatusBar, StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [selectedAllergens, setSelectedAllergens] = useState([]);
  const allergens = ['Peanuts', 'Milk', 'Gluten', 'Soy', 'Fish', 'Eggs', 'Shellfish', 'Tree Nuts'];

  const handleAllergenSelect = (allergen) => {
    if (selectedAllergens.includes(allergen)) {
      setSelectedAllergens(selectedAllergens.filter(item => item !== allergen));
    } else {
      setSelectedAllergens([...selectedAllergens, allergen]);
    }
  };

  const handleLogin = () => {
    // Handle the login logic here, such as saving the selectedAllergens to a database
    Alert.alert('Allergy Information Saved', `You are allergic to: ${selectedAllergens.join(', ')}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../images/ALLERGY.png')}  // Replace with your image's relative path
          style={styles.logo}
        />
      </View>
      <ScrollView style={styles.allergenList}>
        {allergens.map((allergen, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.allergenButton,
              selectedAllergens.includes(allergen) ? styles.selected : {}
            ]}
            onPress={() => handleAllergenSelect(allergen)}
          >
            <Text style={styles.buttonText}>{allergen}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.loginButton} onPress={()=> navigation.navigate("Scanner")}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    padding: 10,
    paddingTop: 40,  // Added top padding
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  allergenList: {
    width: '100%',
    paddingHorizontal: 20,
  },
  allergenButton: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
  },
  selected: {
    backgroundColor: '#e65054',
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
  loginButton: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
});