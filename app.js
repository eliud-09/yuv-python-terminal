// ==================== Line Numbers ====================
function updateLineNumbers() {
    const codeEditor = document.getElementById('codeEditor');
    const lineNumbers = document.getElementById('lineNumbers');
    const lines = codeEditor.value.split('\n').length;

    let lineNumbersHtml = '';
    for (let i = 1; i <= lines; i++) {
        lineNumbersHtml += i + '\n';
    }
    lineNumbers.textContent = lineNumbersHtml;
}

// ==================== Code Templates ====================
const codeTemplates = {
    hello: `# Hello World - YUV.PY
print("🐍 Welcome to YUV.PY Terminal!")
print("Created by Yuval Avidani - GitHub Star")
print("="*50)

# Greetings
name = "Developer"
print(f"\\nHello, {name}! 👋")
print("Ready to code some Python in the browser?")

# Try some math
print(f"\\n✨ Math Operations:")
print(f"2 + 2 = {2 + 2}")
print(f"10 * 5 = {10 * 5}")
print(f"2 ** 8 = {2 ** 8}")

# Try some strings
print(f"\\n🎨 String Operations:")
message = "Python in WebAssembly!"
print(f"Message: {message}")
print(f"Uppercase: {message.upper()}")
print(f"Length: {len(message)} characters")

print(f"\\n🚀 You're running Python {__import__('sys').version.split()[0]} in your browser!")`,

    fibonacci: `# Fibonacci Sequence Generator
def fibonacci(n):
    """Generate Fibonacci sequence up to n terms"""
    a, b = 0, 1
    result = []
    for _ in range(n):
        result.append(a)
        a, b = b, a + b
    return result

# Generate first 15 Fibonacci numbers
fib_numbers = fibonacci(15)
print("Fibonacci Sequence:")
print(fib_numbers)

# Using generator for memory efficiency
def fib_generator(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

print("\\nUsing Generator:")
for num in fib_generator(10):
    print(num, end=' ')`,

    sorting: `# Sorting Algorithms Demo
import random

# Generate random list
numbers = [random.randint(1, 100) for _ in range(10)]
print("Original:", numbers)

# Bubble Sort
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

# Quick Sort
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

print("\\nBubble Sort:", bubble_sort(numbers.copy()))
print("Quick Sort:", quick_sort(numbers.copy()))
print("Built-in Sort:", sorted(numbers))`,

    datastructures: `# Data Structures in Python
from collections import deque, Counter

# Stack using list
stack = []
stack.append(1)
stack.append(2)
stack.append(3)
print("Stack:", stack)
print("Pop:", stack.pop())

# Queue using deque
queue = deque([1, 2, 3])
queue.append(4)
print("\\nQueue:", queue)
print("Dequeue:", queue.popleft())

# Dictionary
person = {
    "name": "Yuval",
    "role": "AI Builder",
    "company": "YUV.AI"
}
print("\\nPerson:", person)

# Set operations
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}
print("\\nUnion:", set1 | set2)
print("Intersection:", set1 & set2)

# Counter
words = ["python", "ai", "python", "ai", "code"]
print("\\nWord Count:", Counter(words))`,

    decorators: `# Python Decorators
import time

def timer_decorator(func):
    """Decorator to measure function execution time"""
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"⏱️ {func.__name__} took {end-start:.4f} seconds")
        return result
    return wrapper

def cache_decorator(func):
    """Simple memoization decorator"""
    cache = {}
    def wrapper(*args):
        if args in cache:
            print(f"📦 Cache hit for {args}")
            return cache[args]
        result = func(*args)
        cache[args] = result
        return result
    return wrapper

@timer_decorator
@cache_decorator
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Test it
print("Computing fibonacci(10)...")
print(f"Result: {fibonacci(10)}")
print("\\nComputing again (cached)...")
print(f"Result: {fibonacci(10)}")`,

    comprehensions: `# List, Dict, and Set Comprehensions

# List Comprehension
squares = [x**2 for x in range(10)]
print("Squares:", squares)

# With condition
evens = [x for x in range(20) if x % 2 == 0]
print("\\nEven numbers:", evens)

# Nested comprehension
matrix = [[i*j for j in range(5)] for i in range(5)]
print("\\nMultiplication Table:")
for row in matrix:
    print(row)

# Dictionary Comprehension
word_lengths = {word: len(word) for word in ["python", "code", "ai"]}
print("\\nWord lengths:", word_lengths)

# Set Comprehension
unique_lengths = {len(word) for word in ["hello", "world", "hi", "code"]}
print("Unique lengths:", unique_lengths)

# Generator Expression (memory efficient)
gen = (x**2 for x in range(1000000))
print("\\nFirst 5 from generator:", [next(gen) for _ in range(5)])`,

    classes: `# Object-Oriented Programming in Python

class Person:
    """A class representing a person"""

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        return f"Hi, I'm {self.name}, {self.age} years old"

    def __repr__(self):
        return f"Person(name='{self.name}', age={self.age})"

class Developer(Person):
    """Developer class inheriting from Person"""

    def __init__(self, name, age, language):
        super().__init__(name, age)
        self.language = language

    def introduce(self):
        return f"{super().introduce()} and I code in {self.language}"

    def code(self):
        return f"💻 Coding in {self.language}..."

# Create instances
person = Person("Alice", 25)
dev = Developer("Yuval", 30, "Python")

print(person.introduce())
print(dev.introduce())
print(dev.code())
print(f"\\nDeveloper object: {dev}")`,

    generators: `# Python Generators - Memory Efficient Iteration

def simple_generator():
    """A simple generator function"""
    yield 1
    yield 2
    yield 3

print("Simple generator:")
for value in simple_generator():
    print(value)

def infinite_sequence():
    """Generate infinite sequence"""
    num = 0
    while True:
        yield num
        num += 1

print("\\nFirst 10 from infinite sequence:")
gen = infinite_sequence()
for _ in range(10):
    print(next(gen), end=' ')

def fibonacci_gen():
    """Fibonacci generator"""
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

print("\\n\\nFibonacci with generator:")
fib = fibonacci_gen()
print([next(fib) for _ in range(10)])

# Generator Expression
squares = (x**2 for x in range(10))
print("\\nSquares generator:", list(squares))

# File reading generator (efficient for large files)
def read_large_file(filename):
    """Memory-efficient file reader"""
    for line in open(filename):
        yield line.strip()

print("\\n✨ Generators are memory efficient!")
print("They generate values on-the-fly instead of storing all in memory")`,

    neuralnet: `# Neural Network Training Simulation
import random
import time

class Neuron:
    def __init__(self):
        self.weights = [random.uniform(-1, 1) for _ in range(3)]
        self.bias = random.uniform(-1, 1)

    def activate(self, inputs):
        # Simple sigmoid activation simulation
        val = sum(w * i for w, i in zip(self.weights, inputs)) + self.bias
        return 1 / (1 + 2.71828 ** -val)

class NeuralLayer:
    def __init__(self, size):
        self.neurons = [Neuron() for _ in range(size)]

    def forward(self, inputs):
        return [n.activate(inputs) for n in self.neurons]

print("🧠 Initializing Neural Network...")
print("Architecture: [Input(3) -> Hidden(4) -> Hidden(4) -> Output(2)]")
time.sleep(0.5)

print("\\n🔄 Starting Training Loop...")
epochs = 5
for i in range(epochs):
    loss = random.uniform(0.1, 0.5) * (1 - i/epochs)
    acc = 0.5 + (0.48 * i/epochs) + random.uniform(-0.02, 0.02)
    
    print(f"Epoch {i+1}/{epochs} | Loss: {loss:.4f} | Accuracy: {acc*100:.2f}%")
    time.sleep(0.8)

print("\\n✨ Training Complete!")
print("Model ready for inference.")`
};

// ==================== Neural Network Builder & Viz ====================
const builderState = {
    inputSize: 3,
    outputSize: 2,
    hiddenLayers: [
        { size: 4, activation: 'relu' },
        { size: 4, activation: 'relu' }
    ],
    framework: 'pytorch', // pytorch, tensorflow, pure
    isOpen: false
};

const neuralViz = {
    canvas: null,
    ctx: null,
    isActive: false,
    particles: [],
    connections: [],
    animationId: null,

    init() {
        this.canvas = document.getElementById('neuralCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.resize();
        window.addEventListener('resize', () => this.resize());
    },

    resize() {
        if (!this.canvas) return;
        this.canvas.width = this.canvas.parentElement.offsetWidth;
        this.canvas.height = this.canvas.parentElement.offsetHeight;
        if (this.isActive) this.createNetwork();
    },

    start() {
        if (this.isActive) return;
        this.isActive = true;
        document.getElementById('neural-viz').classList.add('active');
        this.createNetwork();
        this.animate();
    },

    stop() {
        this.isActive = false;
        document.getElementById('neural-viz').classList.remove('active');
        cancelAnimationFrame(this.animationId);
    },

    createNetwork() {
        this.particles = [];
        this.connections = [];

        // Dynamic layers based on builder state
        const layers = [
            builderState.inputSize,
            ...builderState.hiddenLayers.map(l => l.size),
            builderState.outputSize
        ];

        const layerGap = this.canvas.width / (layers.length + 1);

        layers.forEach((nodeCount, layerIndex) => {
            const x = layerGap * (layerIndex + 1);
            // Center nodes vertically
            const totalHeight = this.canvas.height;
            const nodeGap = Math.min(60, totalHeight / (nodeCount + 1)); // Cap gap size
            const totalNodesHeight = nodeGap * (nodeCount - 1);
            const startY = (totalHeight - totalNodesHeight) / 2;

            for (let i = 0; i < nodeCount; i++) {
                this.particles.push({
                    x: x,
                    y: startY + (i * nodeGap),
                    r: layerIndex === 0 || layerIndex === layers.length - 1 ? 6 : 4,
                    layer: layerIndex,
                    active: false,
                    activation: 0 // For smooth glow
                });
            }
        });

        // Create connections
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = 0; j < this.particles.length; j++) {
                if (this.particles[j].layer === this.particles[i].layer + 1) {
                    this.connections.push({
                        from: this.particles[i],
                        to: this.particles[j],
                        weight: Math.random(),
                        signal: 0
                    });
                }
            }
        }
    },

    animate() {
        if (!this.isActive) return;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Randomly trigger inputs
        if (Math.random() < 0.1) {
            this.particles.filter(p => p.layer === 0).forEach(p => {
                if (Math.random() < 0.5) {
                    p.active = true;
                    p.activation = 1.0;
                }
            });
        }

        // Draw connections
        this.connections.forEach(conn => {
            this.ctx.beginPath();
            this.ctx.moveTo(conn.from.x, conn.from.y);
            this.ctx.lineTo(conn.to.x, conn.to.y);

            // Signal traveling
            if (conn.signal > 0) {
                this.ctx.strokeStyle = `rgba(0, 243, 255, ${conn.signal})`;
                this.ctx.lineWidth = 2;
                conn.signal -= 0.04; // Speed

                // When signal reaches destination (simulated by signal fade for now visuals)
                // Better visual: move a dot? For now, fade is okay, but let's trigger next layer
                if (conn.signal <= 0.1 && conn.to.layer < this.maxLayers) { // logic simplified
                    // handled by from.active logic below
                }
            } else {
                this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
                this.ctx.lineWidth = 1;
            }
            this.ctx.stroke();

            // Propagate signal logic
            if (conn.from.active && conn.signal <= 0) {
                conn.signal = 1;
                // Trigger destination after delay
                setTimeout(() => {
                    conn.to.active = true;
                    conn.to.activation = 1.0;
                }, 100);
            }
        });

        // Draw nodes
        this.particles.forEach(p => {
            if (p.active) {
                p.activation = Math.max(0, p.activation - 0.05);
                if (p.activation <= 0) p.active = false;
            }

            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

            const alpha = 0.3 + (p.activation * 0.7);
            const color = p.layer === 0 ? '#00f3ff' : // Input (Cyan)
                p.layer === builderState.hiddenLayers.length + 1 ? '#bc13fe' : // Output (Purple)
                    '#ffffff'; // Hidden (White)

            this.ctx.fillStyle = p.active ? color : `rgba(255,255,255,0.2)`;
            this.ctx.fill();

            if (p.active) {
                this.ctx.shadowBlur = 15;
                this.ctx.shadowColor = color;
            } else {
                this.ctx.shadowBlur = 0;
            }
        });
        this.ctx.shadowBlur = 0;

        this.animationId = requestAnimationFrame(() => this.animate());
    }
};

// ==================== Code Generation ====================
function generateCode() {
    const { inputSize, outputSize, hiddenLayers, framework } = builderState;
    let code = '';

    if (framework === 'pytorch') {
        code = `# PyTorch Dimensional Neural Network
import torch
import torch.nn as nn
import torch.optim as optim

class NeuralNet(nn.Module):
    def __init__(self):
        super(NeuralNet, self).__init__()
        self.layers = nn.Sequential(
            nn.Linear(${inputSize}, ${hiddenLayers[0]?.size || outputSize}),
            nn.${getActivationPyTorch(hiddenLayers[0]?.activation)},
`;
        // Hidden layers
        for (let i = 1; i < hiddenLayers.length; i++) {
            code += `            nn.Linear(${hiddenLayers[i - 1].size}, ${hiddenLayers[i].size}),
            nn.${getActivationPyTorch(hiddenLayers[i].activation)},
`;
        }
        // Output layer
        code += `            nn.Linear(${hiddenLayers[hiddenLayers.length - 1]?.size || inputSize}, ${outputSize}),
            nn.Sigmoid()
        )

    def forward(self, x):
        return self.layers(x)

# Initialize Model
model = NeuralNet()
print(model)

# Dummy Data
inputs = torch.randn(10, ${inputSize})
targets = torch.randint(0, 2, (10, ${outputSize})).float()

# Training Loop
criterion = nn.BCELoss()
optimizer = optim.Adam(model.parameters(), lr=0.01)

print("\\nTraining for 5 epochs:")
for epoch in range(5):
    optimizer.zero_grad()
    outputs = model(inputs)
    loss = criterion(outputs, targets)
    loss.backward()
    optimizer.step()
    print(f"Epoch {epoch+1}, Loss: {loss.item():.4f}")
`;
    } else if (framework === 'tensorflow') {
        code = `# TensorFlow/Keras Neural Network
import tensorflow as tf
from tensorflow.keras import layers, models
import numpy as np

# Build Model
model = models.Sequential()
model.add(layers.Input(shape=(${inputSize},)))
`;
        hiddenLayers.forEach(layer => {
            code += `model.add(layers.Dense(${layer.size}, activation='${layer.activation}'))\n`;
        });
        code += `model.add(layers.Dense(${outputSize}, activation='sigmoid'))

model.summary()

# Dummy Data
X = np.random.random((100, ${inputSize}))
y = np.random.randint(2, size=(100, ${outputSize}))

# Compile & Train
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
print("\\nStarting Training...")
history = model.fit(X, y, epochs=5, batch_size=10, verbose=1)
`;
    } else {
        // Pure Python (Visual Demo support)
        code = `# Pure Python Neural Network (No Libraries)
import random
import math

def sigmoid(x):
    return 1 / (1 + math.exp(-x))

def sigmoid_derivative(x):
    return x * (1 - x)

class NeuralNetwork:
    def __init__(self):
        # Architecture: ${inputSize} -> ${hiddenLayers.map(l => l.size).join(' -> ')} -> ${outputSize}
        self.weights = []
        self.biases = []
        
        # Initialize Architecture
        sizes = [${inputSize}, ${hiddenLayers.map(l => l.size).join(', ')}, ${outputSize}]
        
        for i in range(len(sizes) - 1):
            w = [[random.uniform(-1, 1) for _ in range(sizes[i+1])] for _ in range(sizes[i])]
            b = [random.uniform(-1, 1) for _ in range(sizes[i+1])]
            self.weights.append(w)
            self.biases.append(b)
            
    def feedforward(self, inputs):
        self.activations = [inputs]
        current = inputs
        
        for i in range(len(self.weights)):
            w = self.weights[i]
            b = self.biases[i]
            next_layer = []
            
            for j in range(len(b)): # For each neuron in next layer
                activation = b[j]
                for k in range(len(current)): # Sum inputs
                    activation += current[k] * w[k][j]
                next_layer.append(sigmoid(activation))
                
            current = next_layer
            self.activations.append(current)
            
        return current

# Create Network
nn = NeuralNetwork()
print("Initialized Pure Python Network")
print(f"Architecture: ${inputSize} inputs, ${outputSize} outputs")

# Test Run
sample_input = [random.random() for _ in range(${inputSize})]
output = nn.feedforward(sample_input)
print(f"\\nInput: {[f'{x:.2f}' for x in sample_input]}")
print(f"Output: {[f'{x:.2f}' for x in output]}")
`;
    }

    return code;
}

function getActivationPyTorch(act) {
    if (!act) return 'ReLU()';
    const map = { 'relu': 'ReLU()', 'sigmoid': 'Sigmoid()', 'tanh': 'Tanh()' };
    return map[act] || 'ReLU()';
}

// ==================== Builder UI Logic ====================
function renderBuilderLayers() {
    const list = document.getElementById('layers-list');
    list.innerHTML = '';

    builderState.hiddenLayers.forEach((layer, index) => {
        const item = document.createElement('div');
        item.className = 'layer-item';
        item.innerHTML = `
            <span>Hidden ${index + 1}</span>
            <div style="display:flex; gap:5px;">
                <input type="number" value="${layer.size}" min="1" max="20" onchange="updateLayer(${index}, 'size', this.value)">
                <select onchange="updateLayer(${index}, 'activation', this.value)" style="background:rgba(255,255,255,0.1); color:white; border:none; border-radius:4px;">
                    <option value="relu" ${layer.activation === 'relu' ? 'selected' : ''}>ReLU</option>
                    <option value="sigmoid" ${layer.activation === 'sigmoid' ? 'selected' : ''}>Sigmoid</option>
                    <option value="tanh" ${layer.activation === 'tanh' ? 'selected' : ''}>Tanh</option>
                </select>
                <button onclick="removeLayer(${index})" style="background:none; border:none; color:#ff3860; cursor:pointer;">✕</button>
            </div>
        `;
        list.appendChild(item);
    });
}

function updateLayer(index, field, value) {
    if (field === 'size') value = parseInt(value);
    builderState.hiddenLayers[index][field] = value;
    neuralViz.createNetwork(); // Live update viz
}

function removeLayer(index) {
    builderState.hiddenLayers.splice(index, 1);
    renderBuilderLayers();
    neuralViz.createNetwork();
}

function addLayer() {
    builderState.hiddenLayers.push({ size: 4, activation: 'relu' });
    renderBuilderLayers();
    neuralViz.createNetwork();
}

function toggleBuilder() {
    const panel = document.getElementById('builder-panel');
    builderState.isOpen = !builderState.isOpen;
    if (builderState.isOpen) {
        panel.classList.add('active');
        renderBuilderLayers();
    } else {
        panel.classList.remove('active');
    }
}

// Global exposure for inline events
window.updateLayer = updateLayer;
window.removeLayer = removeLayer;
window.toggleBuilder = toggleBuilder; // expose global for easy debugging if needed, though we use event listeners mostly for buttons we can reach


function loadTemplate(templateName) {
    const template = codeTemplates[templateName];
    if (template) {
        elements.codeEditor.value = template;
        updateLineNumbers();
        elements.codeEditor.scrollTop = 0;

        // Update active state
        document.querySelectorAll('.nav-btn').forEach(btn => {
            if (btn.getAttribute('data-template') === templateName) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Trigger visualization if neural net
        if (templateName === 'neuralnet') {
            neuralViz.start();
        } else {
            neuralViz.stop();
        }
    }
}

// ==================== Python Integration ====================
let pyodide = null;
let isInitialized = false;

const elements = {
    runBtn: document.getElementById('runBtn'),
    clearBtn: document.getElementById('clearBtn'),
    codeEditor: document.getElementById('codeEditor'),
    output: document.getElementById('output'),
    connectionStatus: document.getElementById('connection-status'),
    pythonVersion: document.getElementById('python-version')
};

// Update connection status
function updateConnectionStatus(message) {
    elements.connectionStatus.textContent = message;

    // Update dot color based on status
    const dot = document.getElementById('connection-dot');
    if (message === 'SYSTEM READY') {
        dot.style.background = 'var(--accent-success)';
        dot.style.boxShadow = '0 0 10px var(--accent-success)';
    } else if (message === 'INITIALIZING') {
        dot.style.background = 'var(--accent-warning)';
        dot.style.boxShadow = '0 0 10px var(--accent-warning)';
    } else {
        dot.style.background = 'var(--accent-error)';
        dot.style.boxShadow = '0 0 10px var(--accent-error)';
    }
}

// Initialize Pyodide
async function initPyodide() {
    if (isInitialized) return;

    try {
        updateConnectionStatus('INITIALIZING');
        elements.runBtn.disabled = true;
        elements.runBtn.style.opacity = '0.5';

        clearOutput();
        appendOutput('$ ', 'terminal-prompt');
        appendOutput('Initializing Python WebAssembly runtime...\n', 'terminal-text');

        pyodide = await loadPyodide({
            indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/'
        });

        // Redirect Python stdout and stderr to our output
        await pyodide.runPythonAsync(`
import sys
import io

class OutputCatcher(io.StringIO):
    def __init__(self, callback):
        super().__init__()
        self.callback = callback

    def write(self, text):
        if text and text.strip():
            self.callback(text)
        return len(text)

output_buffer = []

def capture_output(text):
    output_buffer.append(text)

sys.stdout = OutputCatcher(capture_output)
sys.stderr = OutputCatcher(capture_output)
        `);

        // Get Python version
        const version = await pyodide.runPythonAsync('sys.version.split()[0]');
        elements.pythonVersion.textContent = `Python ${version}`;

        isInitialized = true;
        updateConnectionStatus('SYSTEM READY');
        elements.runBtn.disabled = false;
        elements.runBtn.style.opacity = '1';

        appendOutput('$ ', 'terminal-prompt');
        appendOutput('Runtime initialized successfully\n', 'success-text');
        appendOutput('$ ', 'terminal-prompt');
        appendOutput('Ready to execute Python code\n\n', 'success-text');

    } catch (error) {
        updateConnectionStatus('SYSTEM ERROR');
        appendOutput('$ ', 'terminal-prompt');
        appendOutput(`Failed to initialize: ${error.message}\n`, 'error-text');
        console.error('Pyodide initialization error:', error);
    }
}

// Append output to the output panel
function appendOutput(text, className = '') {
    const outputElement = elements.output;

    if (className) {
        const span = document.createElement('span');
        span.className = className;
        span.textContent = text;
        outputElement.appendChild(span);
    } else {
        const textNode = document.createTextNode(text);
        outputElement.appendChild(textNode);
    }

    // Auto-scroll to bottom with smooth behavior
    const terminalContent = document.querySelector('.terminal-content');
    terminalContent.scrollTop = terminalContent.scrollHeight;
}

// Clear output
function clearOutput() {
    elements.output.innerHTML = '';
}

// Run Python code with animation
async function runPythonCode() {
    if (!isInitialized) {
        await initPyodide();
        if (!isInitialized) return;
    }

    const code = elements.codeEditor.value.trim();

    if (!code) {
        clearOutput();
        appendOutput('$ ', 'terminal-prompt');
        appendOutput('Error: No code to execute\n', 'error-text');
        return;
    }

    try {
        elements.runBtn.disabled = true;
        elements.runBtn.innerHTML = '<span class="icon">⏳</span> RUNNING...';

        clearOutput();
        appendOutput('$ ', 'terminal-prompt');
        appendOutput('Executing...\n\n', 'success-text');

        // Clear the output buffer
        await pyodide.runPythonAsync('output_buffer.clear()');

        // Run the user's code
        await pyodide.runPythonAsync(code);

        // Get captured output
        const capturedOutput = await pyodide.runPythonAsync(`
''.join(output_buffer)
        `);

        if (capturedOutput) {
            appendOutput(capturedOutput);
            appendOutput('\n');
        } else {
            appendOutput('$ ', 'terminal-prompt');
            appendOutput('Execution complete (no output)\n', 'success-text');
        }

        appendOutput('\n$ ', 'terminal-prompt');
        appendOutput('Done\n', 'success-text');

    } catch (error) {
        appendOutput('\n$ ', 'terminal-prompt');
        appendOutput('Traceback:\n', 'error-text');
        appendOutput(error.message + '\n', 'error-text');
        console.error('Python execution error:', error);

    } finally {
        elements.runBtn.disabled = false;
        elements.runBtn.innerHTML = '<span class="icon">▶</span> RUN';
    }
}

// ==================== Event Listeners ====================

// Template buttons
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const template = btn.getAttribute('data-template');
        loadTemplate(template);
        clearOutput();
        appendOutput('$ ', 'terminal-prompt');
        appendOutput(`Loaded template: ${btn.textContent.trim()}\n`, 'success-text');
    });
});

// Run button
elements.runBtn.addEventListener('click', runPythonCode);

// Clear button
elements.clearBtn.addEventListener('click', () => {
    elements.codeEditor.value = '';
    updateLineNumbers();
    clearOutput();
    appendOutput('$ ', 'terminal-prompt');
    appendOutput('Editor cleared\n', 'terminal-text');
});

// Code editor event listeners
elements.codeEditor.addEventListener('input', updateLineNumbers);

elements.codeEditor.addEventListener('scroll', () => {
    const lineNumbers = document.getElementById('lineNumbers');
    lineNumbers.scrollTop = elements.codeEditor.scrollTop;
});

// Keyboard shortcuts
elements.codeEditor.addEventListener('keydown', (e) => {
    // Ctrl+Enter or Shift+Enter to run
    if ((e.ctrlKey || e.shiftKey) && e.key === 'Enter') {
        e.preventDefault();
        runPythonCode();
    }

    // Tab support (4 spaces)
    if (e.key === 'Tab') {
        e.preventDefault();
        const start = e.target.selectionStart;
        const end = e.target.selectionEnd;
        const value = e.target.value;

        e.target.value = value.substring(0, start) + '    ' + value.substring(end);
        e.target.selectionStart = e.target.selectionEnd = start + 4;
        updateLineNumbers();
    }

    // Ctrl+/ to comment/uncomment
    if (e.ctrlKey && e.key === '/') {
        e.preventDefault();
        const start = e.target.selectionStart;
        const end = e.target.selectionEnd;
        const value = e.target.value;

        const lines = value.split('\n');
        const startLine = value.substring(0, start).split('\n').length - 1;
        const endLine = value.substring(0, end).split('\n').length - 1;

        const isAllCommented = lines.slice(startLine, endLine + 1).every(line => line.trim().startsWith('#'));

        for (let i = startLine; i <= endLine; i++) {
            if (isAllCommented) {
                lines[i] = lines[i].replace(/^\s*#\s?/, '');
            } else {
                lines[i] = '# ' + lines[i];
            }
        }

        e.target.value = lines.join('\n');
        updateLineNumbers();
    }
});

// ==================== Initialize on Load ====================
window.addEventListener('DOMContentLoaded', () => {
    // Initialize neural viz
    neuralViz.init();

    // Initialize line numbers
    updateLineNumbers();

    // Builder UI Events
    const openBuilderBtn = document.getElementById('open-builder-btn');
    const closeBuilderBtn = document.getElementById('close-builder');
    const addLayerBtn = document.getElementById('add-layer-btn');
    const generateCodeBtn = document.getElementById('generate-code-btn');
    const inputSizeInput = document.getElementById('input-size');
    const outputSizeInput = document.getElementById('output-size');

    if (openBuilderBtn) openBuilderBtn.addEventListener('click', toggleBuilder);
    if (closeBuilderBtn) closeBuilderBtn.addEventListener('click', toggleBuilder);
    if (addLayerBtn) addLayerBtn.addEventListener('click', addLayer);

    if (inputSizeInput) inputSizeInput.addEventListener('change', (e) => {
        builderState.inputSize = parseInt(e.target.value);
        neuralViz.createNetwork();
    });

    if (outputSizeInput) outputSizeInput.addEventListener('change', (e) => {
        builderState.outputSize = parseInt(e.target.value);
        neuralViz.createNetwork();
    });

    // Framework selection
    document.querySelectorAll('input[name="framework"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            builderState.framework = e.target.value;
        });
    });

    if (generateCodeBtn) {
        generateCodeBtn.addEventListener('click', () => {
            const code = generateCode();
            elements.codeEditor.value = code;
            updateLineNumbers();

            // Auto run if simple python
            if (builderState.framework === 'pure') {
                runPythonCode();
                if (window.innerWidth <= 768) {
                    toggleBuilder(); // Close on mobile after run
                }
            } else {
                // Just show code
                clearOutput();
                appendOutput('$ ', 'terminal-prompt');
                appendOutput(`Generated ${builderState.framework} code. \n`, 'success-text');
                appendOutput('Note: PyTorch/TensorFlow libraries are not yet fully supported in this WASM runtime.\n', 'text-secondary');
                appendOutput('You can copy this code to your local machine, or switch to "Pure Python" to run a simulation here.\n', 'text-secondary');
                // Close builder to see code
                toggleBuilder();
            }
        });
    }

    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    // Close mobile menu when a template is selected
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Simply check if we are in mobile mode by checking computed style or width
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });
    });

    // Set initial status
    updateConnectionStatus('INITIALIZING');

    // Load default template
    loadTemplate('hello');

    // Set initial output
    clearOutput();
    appendOutput('$ ', 'terminal-prompt');
    appendOutput('YUV.PYTHON Terminal v2.0\n', 'terminal-text');
    appendOutput('$ ', 'terminal-prompt');
    appendOutput('Initializing system...\n', 'terminal-text');
});

// Handle window resize
window.addEventListener('resize', updateLineNumbers);
