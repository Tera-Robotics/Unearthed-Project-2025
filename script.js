let map;
let currentInfoWindow = null;
let lastMarkerData = null; // guarda o último marcador aberto

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -21.124722, lng: -51.838333 },
    zoom: 8,
    mapId: "9c1f9a4bf59ad5cbb2f5499c"
  });


  const markers  = [
    {
      title: "Alto Paraná 27",
      description: "106 km de TL - Próximo à ilha Coração",
      lat: -21.124722,
      lng: -51.838333,
      backgroundImage: "Unearthedlogo.png",
      infoData: {
        loc: {
          text: "Fica no município de Três Lagoas, no estado de Mato Grosso do Sul (MS), próximo ao Rio Paraná, em uma área de dique marginal. Sua altitude é de 255 metros em relação ao nível do mar.",
          image: "Unearthedlogo.png"
        },
        characteristics: {
          text: "É um sítio do tipo lito-cerâmico, ou seja, foram encontrados vestígios de artefatos feitos de pedra e cerâmica. Não há arte rupestre (pinturas ou gravuras) no local. O sítio é multicomponencial pré-colonial, o que significa que ele possui mais de uma fase de ocupação humana anterior à chegada dos europeus.",
          image: "Unearthedlogo.png"
        },
        soil: {
          text: "A vegetação atual da área é uma mata ciliar, e o uso do terreno não foi especificado, exceto que não se enquadra em nenhuma das categorias listadas (urbana, pasto, plantio, etc.).",
          image: "Unearthedlogo.png"
        },
        integrity: {
          text: "A integridade do sítio não foi avaliada, mas há um alto risco de destruição devido à inundação pela barragem de Porto Primavera. ",
          image: "Unearthedlogo.png"
        },
        research: {
          text: "As atividades realizadas no local incluíram registro, coleta de superfície e sondagem ou corte estratigráfico. O registro foi feito por Gilson Rodolfo Martins em 30 de maio de 1994, como parte do Projeto Arqueológico Porto Primavera. ",
          image: "Unearthedlogo.png"
        }
      }
    },

    {
      title: "Ilha Àgua Limpa 1",
      description: "Nothing",
      lat: -21.118056,
      lng: -51.823889,
      backgroundImage: "Unearthedlogo.png",
      infoData: {
        loc: {
          text: "O sítio está localizado em uma ilha no município de Três Lagoas, Mato Grosso do Sul, na margem norte, com altitude de 255 metros. Ele fica na bacia do Rio Paraná. ",
          image: "Unearthedlogo.png"
        },
        characteristics: {
          text: "É um sítio lito-cerâmico, o que indica a presença de artefatos de pedra e cerâmica. Ele é considerado multicomponencial pré-colonial, sugerindo que o local foi ocupado em diferentes períodos antes da colonização europeia. ",
          image: "Unearthedlogo.png"
        },
        soil: {
          text: "Além de artefatos líticos (de pedra) lascados e cerâmicos, foram encontrados outros materiais orgânicos, como carvão. O sítio não possui arte rupestre.",
          image: "Unearthedlogo.png"
        },
        integrity: {
          text: "A possibilidade de inundação pela barragem de Porto Primavera é um fator de grande risco para a preservação do sítio, assim como em outros locais da mesma região ",
          image: "Unearthedlogo.png"
        },
        research: {
          text: "As atividades de pesquisa realizadas no sítio incluíram registro, coleta de superfície e sondagem ou corte estratigráfico. O registro foi feito por Gilson Rodolfo Martins em 30 de maio de 1994, como parte do Projeto Arqueológico Porto Primavera. ",
          image: "Unearthedlogo.png"
        }
      }
    },
      {
      title: "Alto Paraná 29",
      description: "Nothing",
      lat: -21.107778,
      lng: -51.810556,
      backgroundImage: "Unearthedlogo.png",
      infoData: {
        loc: {
          text: "Fica na ponta norte de uma ilha no município de Três Lagoas, Mato Grosso do Sul. A altitude do sítio é de 255 metros em relação ao nível do mar e está na bacia do Rio Paraná. ",
          image: "Unearthedlogo.png"
        },
        characteristics: {
          text: "O sítio é do tipo lito-cerâmico, indicando a presença de artefatos de pedra e cerâmica. Ele é considerado multicomponencial pré-colonial, o que significa que o local foi ocupado em mais de uma fase por grupos",
          image: "Unearthedlogo.png"
        },
        soil: {
          text: "Foram encontrados artefatos líticos lascados e cerâmicos. Não há registro de arte rupestre. ",
          image: "Unearthedlogo.png"
        },
        integrity: {
          text: "A principal ameaça ao sítio é a inundação pela barragem de Porto Primavera, um fator de destruição comum na região. ",
          image: "Unearthedlogo.png"
        },
        research: {
          text: "As atividades de pesquisa no local incluíram registro, coleta de superfície e sondagem ou corte estratigráfico. O registro foi feito por Gilson Rodolfo Martins em 30 de maio de 1994, como parte do Projeto Arqueológico ",
          image: "Unearthedlogo.png"
        }
      }
    },

    {
      title: "Alto Paraná 30",
      description: "Nothing",
      lat: -21.107778,
      lng: -51.794444,
      backgroundImage: "Unearthedlogo.png",
      infoData: {
        loc: {
          text: "O sítio se encontra no município de Três Lagoas, Mato Grosso do Sul, em uma área de dique marginal do Rio Paraná. A altitude do local é de 255 metros em relação ao nível do mar.",
          image: "Unearthedlogo.png"
        },
        characteristics: {
          text: "O sítio se encontra no município de Três Lagoas, Mato Grosso do Sul, em uma área de dique marginal do Rio Paraná. A altitude do local é de 255 metros em relação ao nível do mar.",
          image: "Unearthedlogo.png"
        },
        soil: {
          text: "Foram encontrados artefatos líticos lascados e cerâmicos. Não há vestígios de arte rupestre no sítio.",
          image: "Unearthedlogo.png"
        },
        integrity: {
          text: "A principal ameaça ao sítio é a possibilidade de inundação pela barragem de Porto Primavera. ",
          image: "Unearthedlogo.png"
        },
        research: {
          text: "As atividades de pesquisa incluíram registro, coleta de superfície e sondagem ou corte estratigráfico. O registro foi feito em 30 de maio de 1994 por Gilson Rodolfo Martins, como parte do Projeto Arqueológico Porto Primavera. ",
          image: "Unearthedlogo.png"
        }
      }
    },

    {
      title: "Alto Paraná 33",
      description: "Nothing",
      lat: -21.011111, 
      lng: -51.756667,
      backgroundImage: "Unearthedlogo.png",
      infoData: {
        loc: {
          text: "O sítio fica no município de Três Lagoas, Mato Grosso do Sul. Ele está em um dique marginal do Rio Paraná, com uma altitude de 260 metros em relação",
          image: "Unearthedlogo.png"
        },
        characteristics: {
          text: "É classificado como um sítio lítico, indicando a presença de artefatos de pedra. Ele é multicomponencial pré-colonial, o que significa que foi ocupado em diferentes períodos por grupos humanos antes da chegada dos colonizadores ",
          image: "Unearthedlogo.png"
        },
        soil: {
          text: "Foram encontrados artefatos líticos lascados. Não há vestígios de cerâmica nem de arte rupestre no local. A vegetação atual é mata ciliar. ",
          image: "Unearthedlogo.png"
        },
        integrity: {
          text: "O sítio tem grande probabilidade de ser destruído por uma inundação causada pela barragem de Porto Primavera. ",
          image: "Unearthedlogo.png"
        },
        research: {
          text: "As atividades de pesquisa no local incluíram registro, coleta de superfície e sondagem ou corte estratigráfico. O registro foi feito em 30 de maio de 1994 por Gilson Rodolfo Martins, como parte do Projeto Arqueológico Porto Primavera.",
          image: "Unearthedlogo.png"
        }
      }
    },

    {
      title: "Ilha Comprida 6 ",
      description: "Nothing",
      lat: -20.937778,   
      lng: -51.671667,
      backgroundImage: "Unearthedlogo.png",
      infoData: {
        loc: {
          text: "O sítio está localizado na margem sudeste da Ilha Comprida, no município de Três Lagoas, Mato Grosso do Sul. Com uma altitude de 260 metros em relação ao nível do mar, ele se encontra na bacia do Rio Paraná.",
          image: "Unearthedlogo.png"
        },
        characteristics: {
          text: "É classificado como um sítio lito-cerâmico, o que indica a presença de artefatos feitos de pedra e cerâmica. Ele é multicomponencial pré-colonial, ou seja, foi ocupado em diferentes períodos por grupos humanos antes da chegada dos colonizadores.",
          image: "Unearthedlogo.png"
        },
        soil: {
          text: "Foram encontrados artefatos líticos lascados e cerâmicos. Não há registro de arte rupestre no local. A vegetação atual é mata ciliar. ",
          image: "Unearthedlogo.png"
        },
        integrity: {
          text: "O sítio tem grande probabilidade de ser destruído por uma inundação causada pela barragem de Porto Primavera ",
          image: "Unearthedlogo.png"
        },
        research: {
          text: "As atividades de pesquisa incluíram registro, coleta de superfície e sondagem ou corte estratigráfico. O registro foi feito em 31 de maio de 1994 por Gilson Rodolfo Martins, como parte do Projeto Arqueológico Porto Primavera.  ",
          image: "Unearthedlogo.png"
        }
      }
    },

    {
      title: "Ilha Comprida 8 ",
      description: "Nothing",
      lat: -20.931389,
      lng: -51.622778,
      backgroundImage: "Unearthedlogo.png",
      infoData: {
        loc: {
          text: "O sítio Ilha Comprida 8 (IC8), registrado como MS-PR-86 e CNSA MS00437, está situado na margem leste da Ilha Comprida, no município de Três Lagoas, Mato Grosso do Sul. Ele se encontra a 260 metros de altitude, na bacia do Rio Paraná.",
          image: "Unearthedlogo.png"
        },
        characteristics: {
          text: "Este sítio é classificado como lito-cerâmico e multicomponencial pré-colonial. Isso significa que ele foi ocupado em diferentes períodos por grupos humanos que viveram na região antes da colonização europeia, e os vestígios encontrados incluem tanto artefatos de pedra quanto de cerâmica.",
          image: "Unearthedlogo.png"
        },
        soil: {
          text: "Os pesquisadores encontraram artefatos líticos lascados (pedra trabalhada), artefatos cerâmicos e carvão. Não há registro de arte rupestre no local. ",
          image: "Unearthedlogo.png"
        },
        integrity: {
          text: "A principal ameaça ao sítio é a inundação iminente causada pela construção da barragem de Porto Primavera, um risco comum a outros sítios da área. O grau de integridade atual não foi especificado no registro.",
          image: "Unearthedlogo.png"
        },
        research: {
          text: "As atividades de pesquisa no sítio incluíram o registro, a coleta de material na superfície e a realização de sondagens (escavações de teste). O registro foi feito em 1º de junho de 1994 por Gilson Rodolfo Martins, como parte do Projeto Arqueológico Porto Primavera. ",
          image: "Unearthedlogo.png"
        }
      }
    },

    {
      title: "Alto Paraná 41 ",
      description: "Nothing",
      lat: -20.875000, 
      lng: -51.630556,
      backgroundImage: "Unearthedlogo.png",
      infoData: {
        loc: {
          text: "O sítio arqueológico Alto Paraná 41 (AP41), também conhecido como MS-PR-93, está localizado no município de Três Lagoas, no estado de Mato Grosso do Sul. Ele se encontra em um dique marginal do rio Paraná, a 260 metros de altitude em relação ao nível do mar e bem próximo ao rio. A vegetação predominante na área é a mata ciliar.",
          image: "Unearthedlogo.png"
        },
        characteristics: {
          text: "Este é um sítio lito-cerâmico, o que significa que foram encontrados vestígios de artefatos de pedra lascada e cerâmica. O sítio é multicomponencial pré-colonial, indicando que há materiais de diferentes períodos da pré-história e que não há contato com a cultura europeia. Os artefatos foram encontrados tanto na superfície quanto em profundidade, o que sugere que o local foi ocupado por um longo tempo.",
          image: "Unearthedlogo.png"
        },
        soil: {
          text: "O sítio Alto Paraná 41 possui um alto grau de integridade, com mais de 75% de seus vestígios intactos. No entanto, ele enfrenta um alto risco de destruição devido a uma possível inundação pela barragem de Porto Primavera. A erosão pluvial (causada pela chuva) e a erosão fluvial (causada pelo rio) também representam riscos para o local. ",
          image: "Unearthedlogo.png"
        },
        integrity: {
          text: "NAOTINHANAPLANILHA",
          image: "Unearthedlogo.png"
        },
        research: {
          text: "O sítio foi registrado em 01 de junho de 1994 por Gilson Rodolfo Martins. As atividades de pesquisa realizadas no local incluem coleta de superfície e sondagem ou corte estratigráfico, que é a escavação de camadas para entender a história do local. A equipe responsável pelo preenchimento da ficha é de Irmhild Wüst e sua equipe da UFG.",
          image: "Unearthedlogo.png"
        }
      }
    },

    {
      title: "Alto Paraná 40",
      description: "Nothing",
      lat: -20.888611, 
      lng: -51.639444,
      backgroundImage: "Unearthedlogo.png",
      infoData: {
        loc: {
          text: "O sítio arqueológico Alto Paraná 40 (AP40), também conhecido como MS-PR-90, está localizado no município de Três Lagoas, em Mato Grosso do Sul. Ele se encontra em um dique marginal do rio Paraná, a 260 metros acima do nível do mar e bem próximo ao rio. A vegetação atual do local não foi especificad",
          image: "Unearthedlogo.png"
        },
        characteristics: {
          text: "Este é um sítio lito-cerâmico, o que indica a presença de vestígios de artefatos de pedra lascada e cerâmica. A documentação também menciona a presença de carvões, que são considerados vestígios orgânicos  ",
          image: "Unearthedlogo.png"
        },
        soil: {
          text: "A ausência de arte rupestre é observada. O sítio é multicomponencial pré-colonial, o que sugere que ele foi ocupado por grupos humanos em diferentes períodos da pré-história. Os vestígios foram encontrados tanto na superfície quanto em profundidade.",
          image: "Unearthedlogo.png"
        },
        integrity: {
          text: "O sítio Alto Paraná 40 tem um alto grau de integridade, com mais de 75% dos vestígios preservados. No entanto, o principal risco de destruição é a inundação pela barragem de Porto Primavera, um fator antrópico. Fatores naturais como a erosão pluvial (causada pela chuva) e a erosão fluvial (causada pelo rio) também são ameaças.  ",
          image: "Unearthedlogo.png"
        },
        research: {
          text: "O registro do sítio foi feito em 02 de junho de 1994, pelo responsável Gilson Rodolfo Martins. As atividades de pesquisa realizadas incluem coleta de superfície e sondagem ou corte estratigráfico, que consistem na escavação de camadas do solo para análise. A ficha de cadastro foi preenchida pela equipe de Irmhild Wüst, da Universidade Federal de Goiás (UFG).  ",
          image: "Unearthedlogo.png"
        }
      }
    },

    {
      title: "Córrego Moeda 1 ",
      description: "Nothing",
      lat: -20.961667, 
      lng: -51.780833,
      backgroundImage: "Unearthedlogo.png",
      infoData: {
        loc: {
          text: "O sítio arqueológico Córrego Moeda I (CNSA: MS00483) está localizado no município de Três Lagoas, em Mato Grosso do Sul. Ele se encontra a 280 metros de altitude, próximo ao Córrego Moeda, que deságua no rio Paraná. A vegetação no local é uma mistura de vegetação ciliar e pastagens. ",
          image: "Unearthedlogo.png"
        },
        characteristics: {
          text: "Este sítio é descrito como uma antiga e grande aldeia ceramista. É classificado como um acampamento multicomponencial pré-colonial, indicando que diferentes grupos humanos, anteriores ao contato com europeus, ocuparam o local  ",
          image: "Unearthedlogo.png"
        },
        soil: {
          text: "Os vestígios, encontrados em um solo arenoso de cor alaranjada, incluem artefatos líticos (de pedra) e cerâmicos, além de amostras de carvão. ",
          image: "Unearthedlogo.png"
        },
        integrity: {
          text: "O grau de integridade do sítio não foi especificado, mas os riscos de destruição são claros. A superfície do sítio está sujeita à ação de máquinas agrícolas, e a implantação do Gasoduto Bolívia-Brasil (GASBOL) também representa uma ameaça direta. Por conta desses riscos, uma das medidas de preservação sugeridas é o resgate arqueológico.  ",
          image: "Unearthedlogo.png"
        },
        research: {
          text: "O sítio Córrego Moeda I foi registrado pelo Prof. Dr. Gilson Rodolfo Martins. As atividades de pesquisa incluíram coleta de superfície, sondagem e corte estratigráfico. A documentação do sítio inclui um mapa e três croquis. A ficha de cadastro foi preenchida em 21 de agosto de 1998 por Bianca Oliveira. ",
          image: "Unearthedlogo.png"
        }
      }
    },

    {
      title: "Alto Paraná 44",
      description: "Nothing",
      lat: -20.836389, 
      lng: -51.637500,
      backgroundImage: "Unearthedlogo.png",
      infoData: {
        loc: {
          text: "O sítio arqueológico Alto Paraná 44 (AP44), também conhecido como MS-PR-96, está localizado no município de Três Lagoas, em Mato Grosso do Sul. Ele se encontra em um dique marginal do rio Paraná, a 260 metros de altitude e próximo ao rio. A vegetação no local não foi especificada na ficha de registro.  ",
          image: "Unearthedlogo.png"
        },
        characteristics: {
          text: "Este é um sítio de ocupação de caçadores-coletores. A principal evidência encontrada são estruturas de fogueira que estavam associadas a vestígios de lascamento em seixo, que é um tipo de rocha. Além disso, foram encontrados artefatos líticos lascados e cerâmicos ",
          image: "Unearthedlogo.png"
        },
        soil: {
          text: "A ficha o classifica como um sítio lito-cerâmico multicomponencial pré-colonial, o que significa que há material de diferentes períodos da pré-história.",
          image: "Unearthedlogo.png"
        },
        integrity: {
          text: "O sítio Alto Paraná 44 tem um alto grau de integridade, com mais de 75% dos vestígios intactos. O maior risco de destruição é a inundação pela barragem de Porto Primavera. A erosão pluvial (chuva) e a erosão fluvial (rio) também são fatores que ameaçam a preservação do local.  ",
          image: "Unearthedlogo.png"
        },
        research: {
          text: "O sítio foi registrado em 01 de junho de 1994 por Gilson Rodolfo Martins. As atividades de pesquisa realizadas incluíram coleta de superfície e sondagem ou corte estratigráfico. A ficha de cadastro foi preenchida pela equipe de Irmhild Wüst, da UFG. ",
          image: "Unearthedlogo.png"
        }
      }
    },

    

  ];

  markers.forEach((markerData) => {
  const marker = new google.maps.Marker({
    position: { lat: markerData.lat, lng: markerData.lng },
    map: map,
    title: markerData.title,
    // Aqui você define o ícone do marcador
    icon: {
      url: "unerathed.svg", // substitua pelo caminho do seu ícone
      scaledSize: new google.maps.Size(40, 40), // tamanho do ícone
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(20, 40) // ponto de ancoragem do ícone
    }
  });

  const infoWindowContent = createInfoWindowContent(markerData);

  const infoWindow = new google.maps.InfoWindow({
    content: infoWindowContent,
  });

  marker.addListener("click", () => {
    if (currentInfoWindow) currentInfoWindow.close();
    infoWindow.open(map, marker);
    currentInfoWindow = infoWindow;
    lastMarkerData = markerData;
  });
});


// --------------------- FUNÇÕES DE INFO ---------------------

function showRoutesInfo(lat, lng) { 
  const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  window.open(url, '_blank'); 
}

function showInfo(markerData, key, subtitle) {
  const info = markerData.infoData[key];
  const content = createInfoContent(markerData.title, info.text, info.image, subtitle, markerData);
  if (currentInfoWindow) currentInfoWindow.setContent(content);
}

// --------------------- FUNÇÃO PARA CRIAR O CONTEÚDO ---------------------

function createInfoContent(title, text, image, subtitle, markerData) {
  return `
    <div class="custom-infowindow" style="position:relative; width:500px; height:350px;">
      <div class="info-header" style="
        height:150px;
        background-image: url('${image}');
        background-size: cover;
        background-position: center;
        position:relative;">
        
        <!-- Botão de voltar sobreposto à imagem -->
        <button class="back-btn" onclick="goBackToMarker()" style="
          position:absolute;
          top:10px;
          right:10px;
          padding:6px 12px;
          font-size:16px;
          background-color:rgba(255,255,255,0.8);
          border:1px solid #ccc;
          border-radius:6px;
          cursor:pointer;
          z-index:10;
        ">⬅ Voltar</button>
      </div>

      <div class="coordinates-display" style="margin-top:10px;">${title} - ${subtitle}</div>

      <div class="info-content" style="padding:10px; position:relative; height:180px; overflow:auto;">
        <p style="font-size:18px; line-height:1.5;">${text}</p>
      </div>
    </div>
  `;
}

// --------------------- VOLTAR AO MARCADOR ---------------------

function goBackToMarker() {
  if (lastMarkerData && currentInfoWindow) {
    const content = createInfoWindowContent(lastMarkerData);
    currentInfoWindow.setContent(content);
  }
}

// --------------------- CONTEÚDO ORIGINAL DA INFOWINDOW ---------------------

function createInfoWindowContent(markerData) {
  return `
    <div class="custom-infowindow" style="position:relative; width:500px;">
      <div class="info-header" style="
        height:150px;
        background-image: url('${markerData.backgroundImage}');
        background-size: cover;
        background-position: center;">
      </div>
      <div class="coordinates-display" style="margin-top:10px;">${markerData.title}</div>
      <div class="info-content" style="padding:10px;">
        <div class="location-info">
          <div class="location-title">${markerData.title}</div>
          <div class="location-coords">${markerData.description}</div>
          <div class="location-coords">${markerData.lat.toFixed(6)}, ${markerData.lng.toFixed(6)}</div>
        </div>
        <div class="action-buttons" style="display:flex; flex-wrap:wrap; gap:5px; margin-top:10px;">
          <button class="action-btn" onclick="showRoutesInfo(${markerData.lat}, ${markerData.lng})">
            <div class="action-icon routes-icon">🗺</div>
            <div class="action-text">Rotas</div>
          </button>

          <button class="action-btn" onclick="showInfo(lastMarkerData, 'loc', 'Localização')">
            <div class="action-icon save-icon">📍</div>
            <div class="action-text">Localização</div>
          </button>

          <button class="action-btn" onclick="showInfo(lastMarkerData, 'characteristics', 'Características')">
            <div class="action-icon nearby-icon">📝</div>
            <div class="action-text">Características</div>
          </button>

          <button class="action-btn" onclick="showInfo(lastMarkerData, 'soil', 'Solo')">
            <div class="action-icon send-icon">🏕️</div>
            <div class="action-text">Solo</div>
          </button>

          <button class="action-btn" onclick="showInfo(lastMarkerData, 'integrity', 'Integridade')">
            <div class="action-icon share-icon">⚠️</div>
            <div class="action-text">Integridade</div>
          </button>

          <button class="action-btn" onclick="showInfo(lastMarkerData, 'research', 'Pesquisa')">
            <div class="action-icon share-icon">🔍</div>
            <div class="action-text">Pesquisa</div>
          </button>
        </div>
      </div>
    </div>
  `;
}
window.lastMarkerData = lastMarkerData;
window.showInfo = showInfo;
window.goBackToMarker = goBackToMarker;
window.showRoutesInfo = showRoutesInfo;
}
