import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';

const Questionario = [
    {
        questao: 'O que é React Native?',
        opcao: ['Uma linguagem de programação', 'Uma biblioteca de backend', 'Um framework para apps mobile', 'Um sistema operacional'],
        resposata: 2
    },
    {
        questao: 'Qual hook usamos para gerenciar estados em React?',
        opcao: ['useEffect', 'useState', 'useContext', 'useRef'],
        resposata: 1
    },
    {
        questao: 'Qual desses é um componente básico do React Native?',
        opcao: ['<Div>', '<View>', '<Section>', '<Container>'],
        resposata: 1
    }
];

export default function QuizScreen() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleresposata = (index) => {
        if (index === Questionario[currentQuestion].resposata) {
            setScore(score + 1);
        }
        const next = currentQuestion + 1;
        if (next < Questionario.length) {
            setCurrentQuestion(next);
        } else {
            setShowScore(true);
        }
    };

    return (
        <ScreenWrapper style={styles.container}>
            {showScore ? (
                <View style={styles.buttonsContainer}>
                    <Text style={styles.textoAcerto}>Você acertou {score} de {Questionario.length} questões!</Text>,
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Selection')}
                    >
                        <Text style={styles.buttonText}>Voltar à tela de seleção</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View>
                    <Text style={styles.pergunta}>{currentQuestion + 1}º Pergunta</Text>
                    <Text style={styles.question}>{Questionario[currentQuestion].questao}</Text>
                    {Questionario[currentQuestion].opcao.map((option, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.optionButton}
                            onPress={() => handleresposata(index)}>
                            <Text style={styles.optionText}>{option}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1e29',
        padding: 20,
        backgroundColor: '#121212',
        justifyContent: 'space-between',
    },
    question: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20
    },
    pergunta: {
        color: '#f13678',
        fontSize: 18,
        marginBottom: 16,
        fontWeight: 'bold',
    },
    optionButton: {
        backgroundColor: '#e5286a',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10
    },
    optionText: {
        color: '#fff',
        fontSize: 16
    },
    textoAcerto: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        color: '#01c38e',
        textAlign: 'center'
    },
    buttonsContainer: {
        gap: 10,
        marginBottom: 16,
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#f13678',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});