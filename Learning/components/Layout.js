import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function Layout({ children }) {
  const navigation = useNavigation();
  const route = useRoute();

  const showBackButton = route.name !== 'Welcome';

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {showBackButton && (
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#ffffff" />
          </TouchableOpacity>
        )}
        <Text style={styles.headerText}>{route.name}</Text>
      </View>

      <View style={styles.content}>{children}</View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Mini Tutorial React Native</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1e29',
  },
  header: {
    height: 60,
    backgroundColor: '#132d46',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#01c38e',
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#1a1e29',
  },
  footer: {
    height: 50,
    backgroundColor: '#132d46',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#01c38e',
  },
  footerText: {
    color: '#ffffff',
    fontSize: 14,
  },
});