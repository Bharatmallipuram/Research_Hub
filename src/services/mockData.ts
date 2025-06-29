import { Paper } from '../types/Paper';

export const mockPapers: Paper[] = [
  {
    id: '1',
    title: 'Attention Is All You Need: Transformers for Natural Language Processing',
    authors: [
      { id: '1', name: 'Ashish Vaswani', affiliation: 'Google Brain' },
      { id: '2', name: 'Noam Shazeer', affiliation: 'Google Brain' },
      { id: '3', name: 'Niki Parmar', affiliation: 'Google Research' }
    ],
    abstract: 'The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely.',
    abstractSnippet: 'The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder...',
    publicationDate: '2017-06-12',
    venue: 'NIPS 2017',
    pdfUrl: 'https://arxiv.org/pdf/1706.03762.pdf',
    arxivId: '1706.03762',
    doi: '10.5555/3295222.3295349',
    citationCount: 89432,
    categories: ['Machine Learning', 'Natural Language Processing'],
    keywords: ['transformers', 'attention', 'neural networks', 'nlp'],
    codeRepositories: [
      {
        id: '1',
        platform: 'github',
        url: 'https://github.com/tensorflow/tensor2tensor',
        stars: 15243,
        forks: 3421,
        language: 'Python',
        lastUpdated: '2024-01-15'
      }
    ],
    hasCode: true
  },
  {
    id: '2',
    title: 'Deep Residual Learning for Image Recognition',
    authors: [
      { id: '4', name: 'Kaiming He', affiliation: 'Microsoft Research' },
      { id: '5', name: 'Xiangyu Zhang', affiliation: 'Microsoft Research' },
      { id: '6', name: 'Shaoqing Ren', affiliation: 'Microsoft Research' }
    ],
    abstract: 'Deeper neural networks are more difficult to train. We present a residual learning framework to ease the training of networks that are substantially deeper than those used previously. We explicitly reformulate the layers as learning residual functions with reference to the layer inputs, instead of learning unreferenced functions.',
    abstractSnippet: 'Deeper neural networks are more difficult to train. We present a residual learning framework to ease the training of networks...',
    publicationDate: '2015-12-10',
    venue: 'CVPR 2016',
    pdfUrl: 'https://arxiv.org/pdf/1512.03385.pdf',
    arxivId: '1512.03385',
    citationCount: 167854,
    categories: ['Computer Vision', 'Deep Learning'],
    keywords: ['resnet', 'deep learning', 'computer vision', 'cnn'],
    codeRepositories: [
      {
        id: '2',
        platform: 'github',
        url: 'https://github.com/KaimingHe/deep-residual-networks',
        stars: 7892,
        forks: 2341,
        language: 'MATLAB',
        lastUpdated: '2023-11-20'
      }
    ],
    hasCode: true
  },
  {
    id: '3',
    title: 'Generative Adversarial Networks',
    authors: [
      { id: '7', name: 'Ian J. Goodfellow', affiliation: 'University of Montreal' },
      { id: '8', name: 'Jean Pouget-Abadie', affiliation: 'University of Montreal' },
      { id: '9', name: 'Mehdi Mirza', affiliation: 'University of Montreal' }
    ],
    abstract: 'We propose a new framework for estimating generative models via an adversarial process, in which we simultaneously train two models: a generative model G that captures the data distribution, and a discriminative model D that estimates the probability that a sample came from the training data rather than G.',
    abstractSnippet: 'We propose a new framework for estimating generative models via an adversarial process, in which we simultaneously train two models...',
    publicationDate: '2014-06-10',
    venue: 'NIPS 2014',
    pdfUrl: 'https://arxiv.org/pdf/1406.2661.pdf',
    arxivId: '1406.2661',
    citationCount: 54321,
    categories: ['Machine Learning', 'Generative Models'],
    keywords: ['gan', 'generative', 'adversarial', 'neural networks'],
    codeRepositories: [
      {
        id: '3',
        platform: 'github',
        url: 'https://github.com/goodfeli/adversarial',
        stars: 3456,
        forks: 1234,
        language: 'Python',
        lastUpdated: '2023-08-15'
      }
    ],
    hasCode: true
  },
  {
    id: '4',
    title: 'BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding',
    authors: [
      { id: '10', name: 'Jacob Devlin', affiliation: 'Google AI Language' },
      { id: '11', name: 'Ming-Wei Chang', affiliation: 'Google AI Language' },
      { id: '12', name: 'Kenton Lee', affiliation: 'Google AI Language' }
    ],
    abstract: 'We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional representations from unlabeled text by jointly conditioning on both left and right context in all layers.',
    abstractSnippet: 'We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations from Transformers...',
    publicationDate: '2018-10-11',
    venue: 'NAACL 2019',
    pdfUrl: 'https://arxiv.org/pdf/1810.04805.pdf',
    arxivId: '1810.04805',
    citationCount: 98765,
    categories: ['Natural Language Processing', 'Machine Learning'],
    keywords: ['bert', 'transformers', 'nlp', 'pre-training'],
    codeRepositories: [
      {
        id: '4',
        platform: 'github',
        url: 'https://github.com/google-research/bert',
        stars: 37421,
        forks: 9876,
        language: 'Python',
        lastUpdated: '2024-01-20'
      }
    ],
    hasCode: true
  },
  {
    id: '5',
    title: 'You Only Look Once: Unified, Real-Time Object Detection',
    authors: [
      { id: '13', name: 'Joseph Redmon', affiliation: 'University of Washington' },
      { id: '14', name: 'Santosh Divvala', affiliation: 'University of Washington' },
      { id: '15', name: 'Ross Girshick', affiliation: 'Facebook AI Research' }
    ],
    abstract: 'We present YOLO, a new approach to object detection. Prior work on object detection repurposes classifiers to perform detection. Instead, we frame object detection as a regression problem to spatially separated bounding boxes and associated class probabilities.',
    abstractSnippet: 'We present YOLO, a new approach to object detection. Prior work on object detection repurposes classifiers to perform detection...',
    publicationDate: '2015-06-08',
    venue: 'CVPR 2016',
    pdfUrl: 'https://arxiv.org/pdf/1506.02640.pdf',
    arxivId: '1506.02640',
    citationCount: 32145,
    categories: ['Computer Vision', 'Object Detection'],
    keywords: ['yolo', 'object detection', 'real-time', 'computer vision'],
    codeRepositories: [
      {
        id: '5',
        platform: 'github',
        url: 'https://github.com/pjreddie/darknet',
        stars: 25678,
        forks: 21345,
        language: 'C',
        lastUpdated: '2023-12-05'
      }
    ],
    hasCode: true
  }
];

export const categories = [
  'Machine Learning',
  'Computer Vision',
  'Natural Language Processing',
  'Deep Learning',
  'Reinforcement Learning',
  'Robotics',
  'Data Mining',
  'Computer Graphics',
  'Human-Computer Interaction',
  'Distributed Systems'
];

export const popularKeywords = [
  'transformer', 'neural network', 'deep learning', 'machine learning',
  'computer vision', 'nlp', 'bert', 'gpt', 'cnn', 'rnn', 'gan', 'yolo',
  'attention', 'reinforcement learning', 'object detection', 'classification'
];