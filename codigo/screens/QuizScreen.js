import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';

const questionario = [

    {
        questao: "Qual comando é usado para criar um novo projeto com Expo?",
        opcao: [
            "npx create-expo-app",
            "npm install -g expo-cli",
            "expo init",
            "npx expo start"
        ],
        reposta: "npx create-expo-app"
    },
    {
        questao: "Para que serve o hook useState?",
        opcao: [
            "Executar efeitos colaterais",
            "Criar rotas no app",
            "Gerenciar estado dentro de componentes",
            "Estilizar componentes"
        ],
        reposta: "Gerenciar estado dentro de componentes"
    },
    {
        questao: "Qual destes é um componente básico do React Native?",
        opcao: [
            "div",
            "section",
            "View",
            "container"
        ],
        reposta: "View"
    },
    {
        questao: "O que é um componente em React Native?",
        opcao: [
            "Um estilo CSS usado no aplicativo",
            "Uma parte reutilizável da interface do usuário",
            "Uma função que conecta ao banco de dados",
            "Um tipo de imagem especial"
        ],
        reposta: "Uma parte reutilizável da interface do usuário"
    },
    {
        questao: "Qual hook usamos para criar e atualizar estados em componentes funcionais?",
        opcao: [
            "useEffect",
            "useStyle",
            "useState",
            "useComponent"
        ],
        reposta: "useState"
    },
    {
        questao: "Para estilizar um componente em React Native, usamos:",
        opcao: [
            "CSS puro",
            "Arquivos .style",
            "Objeto JavaScript com propriedades",
            "Inline HTML"
        ],
        reposta: "Objeto JavaScript com propriedades"
    },
    {
        questao: "Qual propriedade usamos para passar informações para um componente?",
        opcao: [
            "props",
            "state",
            "style",
            "data"
        ],
        reposta: "props"
    },
    {
        questao: "O que acontece quando o estado de um componente muda?",
        opcao: [
            "O app fecha",
            "O componente é destruído",
            "O componente é atualizado na tela",
            "Nada muda"
        ],
        reposta: "O componente é atualizado na tela"
    },
    {
        questao: "Como se chama o objeto usado para aplicar estilos em React Native?",
        opcao: [
            "CSS",
            "stylesheet",
            "StyleSheet",
            "styleObject"
        ],
        reposta: "StyleSheet"
    },
    {
        questao: "Qual comando inicia um app Expo em um emulador ou dispositivo físico?",
        opcao: [
            "npm start",
            "npx start",
            "expo run",
            "npx expo start"
        ],
        reposta: "npx expo start"
    }
];

export default function QuizScreen() {
    const [currentquestao, setCurrentquestao] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handlereposta = (selectedOption) => {
        if (selectedOption === questionario[currentquestao].reposta) {
            setScore(score + 1);
        }
        const next = currentquestao + 1;
        if (next < questionario.length) {
            setCurrentquestao(next);
        } else {
            setShowScore(true);
        }
    };

    return (
        <ScreenWrapper style={styles.container}>
            {showScore ? (
                <View style={styles.buttonsContainer}>
                    <Text style={styles.textoAcerto}>Você acertou {score} de {questionario.length} questões!</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Selection')}
                    >
                        <Text style={styles.buttonText}>Voltar à tela de seleção</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View>
                    <Text style={styles.pergunta}>{currentquestao + 1}º Pergunta</Text>
                    <Text style={styles.questao}>{questionario[currentquestao].questao}</Text>
                    {questionario[currentquestao].opcao.map((option, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.optionButton}
                            onPress={() => handlereposta(option)}>
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
    questao: {
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