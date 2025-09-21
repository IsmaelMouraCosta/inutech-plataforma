import { Metadata } from 'next'
import { Brain, Code, Download, Play, Save, Share2, Terminal, Zap } from 'lucide-react'
import Link from 'next/link'
import { AuthRequired } from '@/components/auth-required'

export const metadata: Metadata = {
  title: 'Laboratório IA/ML - iNuTech iCT',
  description: 'Desenvolva e teste algoritmos de Inteligência Artificial e Machine Learning em nosso laboratório virtual.',
  keywords: 'inteligência artificial, machine learning, laboratório virtual, python, tensorflow, pytorch, inutech',
}

export default function AILabPage() {
  return (
    <AuthRequired>
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/laboratorios"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                ← Voltar aos Laboratórios
              </Link>
              <div className="h-6 w-px bg-gray-300 dark:bg-slate-600" />
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-lg">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-slate-100">
                    Laboratório IA/ML
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-slate-400">
                    Inteligência Artificial & Machine Learning
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-slate-600 text-sm font-medium rounded-md text-gray-700 dark:text-slate-200 bg-white dark:bg-slate-700 hover:bg-gray-50 dark:hover:bg-slate-600">
                <Save className="mr-2 h-4 w-4" />
                Salvar
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-slate-600 text-sm font-medium rounded-md text-gray-700 dark:text-slate-200 bg-white dark:bg-slate-700 hover:bg-gray-50 dark:hover:bg-slate-600">
                <Share2 className="mr-2 h-4 w-4" />
                Compartilhar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-100 mb-4">
                Ferramentas Disponíveis
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
                  <Code className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-slate-100">Python</p>
                    <p className="text-xs text-gray-500 dark:text-slate-400">v3.11.0</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
                  <Zap className="h-5 w-5 text-orange-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-slate-100">TensorFlow</p>
                    <p className="text-xs text-gray-500 dark:text-slate-400">v2.15.0</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
                  <Brain className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-slate-100">PyTorch</p>
                    <p className="text-xs text-gray-500 dark:text-slate-400">v2.1.0</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
                  <Terminal className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-slate-100">Jupyter</p>
                    <p className="text-xs text-gray-500 dark:text-slate-400">v6.5.0</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-slate-600">
                <h4 className="text-sm font-medium text-gray-900 dark:text-slate-100 mb-3">
                  Templates Disponíveis
                </h4>
                <div className="space-y-2">
                  <button className="w-full text-left p-2 text-sm text-gray-600 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-700 rounded">
                    Classificação de Imagens
                  </button>
                  <button className="w-full text-left p-2 text-sm text-gray-600 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-700 rounded">
                    Análise de Sentimentos
                  </button>
                  <button className="w-full text-left p-2 text-sm text-gray-600 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-700 rounded">
                    Recomendação de Produtos
                  </button>
                  <button className="w-full text-left p-2 text-sm text-gray-600 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-700 rounded">
                    Detecção de Anomalias
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Editor Section */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700 overflow-hidden">
              <div className="bg-gray-50 dark:bg-slate-700 px-4 py-3 border-b border-gray-200 dark:border-slate-600">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium text-gray-700 dark:text-slate-300">
                      main.py
                    </span>
                    <span className="text-xs text-gray-500 dark:text-slate-400">
                      Python
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-slate-300">
                      <Download className="h-4 w-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-slate-300">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="bg-gray-900 dark:bg-slate-900 rounded-lg p-4 font-mono text-sm text-gray-100">
                  <pre className="overflow-x-auto">
{`# Laboratório Virtual IA/ML - iNuTech iCT
# Template: Classificação de Imagens com CNN

import tensorflow as tf
import numpy as np
import matplotlib.pyplot as plt
from tensorflow.keras import layers, models

print("🚀 Iniciando Laboratório Virtual IA/ML...")
print("📊 TensorFlow version:", tf.__version__)

# Configuração do ambiente
print("🔧 Configurando ambiente...")
tf.random.set_seed(42)
np.random.seed(42)

# Carregando dataset de exemplo (MNIST)
print("📥 Carregando dataset MNIST...")
(x_train, y_train), (x_test, y_test) = tf.keras.datasets.mnist.load_data()

# Normalização dos dados
x_train = x_train.astype('float32') / 255.0
x_test = x_test.astype('float32') / 255.0

print(f"📊 Dados de treino: {x_train.shape}")
print(f"📊 Dados de teste: {x_test.shape}")

# Definindo modelo CNN
def create_cnn_model():
    model = models.Sequential([
        layers.Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)),
        layers.MaxPooling2D((2, 2)),
        layers.Conv2D(64, (3, 3), activation='relu'),
        layers.MaxPooling2D((2, 2)),
        layers.Conv2D(64, (3, 3), activation='relu'),
        layers.Flatten(),
        layers.Dense(64, activation='relu'),
        layers.Dense(10, activation='softmax')
    ])
    return model

# Criando e compilando modelo
print("🧠 Criando modelo CNN...")
model = create_cnn_model()
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

# Reshape dos dados para CNN
x_train = x_train.reshape(-1, 28, 28, 1)
x_test = x_test.reshape(-1, 28, 28, 1)

print("🎯 Modelo criado com sucesso!")
print("📋 Resumo do modelo:")
model.summary()

# Treinamento (simulado para demonstração)
print("\\n⏳ Iniciando treinamento...")
print("📈 Época 1/5 - loss: 0.2345 - accuracy: 0.9234")
print("📈 Época 2/5 - loss: 0.1234 - accuracy: 0.9567")
print("📈 Época 3/5 - loss: 0.0891 - accuracy: 0.9723")
print("📈 Época 4/5 - loss: 0.0678 - accuracy: 0.9812")
print("📈 Época 5/5 - loss: 0.0543 - accuracy: 0.9876")

print("\\n✅ Treinamento concluído!")
print("🎉 Modelo pronto para uso!")

# Exemplo de predição
print("\\n🔮 Testando predição...")
sample_image = x_test[0:1]
prediction = model.predict(sample_image)
predicted_class = np.argmax(prediction[0])
true_class = y_test[0]

print(f"📸 Imagem de teste: {true_class}")
print(f"🤖 Predição do modelo: {predicted_class}")
print(f"🎯 Acerto: {'✅' if predicted_class == true_class else '❌'}")

print("\\n🌟 Laboratório concluído com sucesso!")`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Output Section */}
            <div className="mt-6 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700 overflow-hidden">
              <div className="bg-gray-50 dark:bg-slate-700 px-4 py-3 border-b border-gray-200 dark:border-slate-600">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-slate-300">
                    Output
                  </span>
                  <button className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                    <Play className="mr-1 h-3 w-3" />
                    Executar
                  </button>
                </div>
              </div>
              
              <div className="p-4">
                <div className="bg-gray-900 dark:bg-slate-900 rounded-lg p-4 font-mono text-sm text-green-400">
                  <pre className="overflow-x-auto">
{`🚀 Iniciando Laboratório Virtual IA/ML...
📊 TensorFlow version: 2.15.0
🔧 Configurando ambiente...
📥 Carregando dataset MNIST...
📊 Dados de treino: (60000, 28, 28)
📊 Dados de teste: (10000, 28, 28)
🧠 Criando modelo CNN...
🎯 Modelo criado com sucesso!
📋 Resumo do modelo:
Model: "sequential"
_________________________________________________________________
Layer (type)                Output Shape              Param #   
=================================================================
conv2d (Conv2D)            (None, 26, 26, 32)       320       
max_pooling2d (MaxPooling2D) (None, 13, 13, 32)     0         
conv2d_1 (Conv2D)          (None, 11, 11, 64)       18496     
max_pooling2d_1 (MaxPooling2D) (None, 5, 5, 64)     0         
conv2d_2 (Conv2D)          (None, 3, 3, 64)         36928     
flatten (Flatten)          (None, 576)               0         
dense (Dense)              (None, 64)                36928     
dense_1 (Dense)            (None, 10)                650       
=================================================================
Total params: 93,322
Trainable params: 93,322
Non-trainable params: 0
_________________________________________________________________

⏳ Iniciando treinamento...
📈 Época 1/5 - loss: 0.2345 - accuracy: 0.9234
📈 Época 2/5 - loss: 0.1234 - accuracy: 0.9567
📈 Época 3/5 - loss: 0.0891 - accuracy: 0.9723
📈 Época 4/5 - loss: 0.0678 - accuracy: 0.9812
📈 Época 5/5 - loss: 0.0543 - accuracy: 0.9876

✅ Treinamento concluído!
🎉 Modelo pronto para uso!

🔮 Testando predição...
📸 Imagem de teste: 7
🤖 Predição do modelo: 7
🎯 Acerto: ✅

🌟 Laboratório concluído com sucesso!`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="flex items-center justify-center p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium">
                <Play className="mr-2 h-5 w-5" />
                Executar Código
              </button>
              <button className="flex items-center justify-center p-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium">
                <Save className="mr-2 h-5 w-5" />
                Salvar Projeto
              </button>
              <button className="flex items-center justify-center p-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium">
                <Share2 className="mr-2 h-5 w-5" />
                Compartilhar
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </AuthRequired>
  )
}
