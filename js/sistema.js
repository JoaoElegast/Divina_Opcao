# Contando o número de itens na lista
itens_loja = [
    { "id": "espada_longa_1", "nome": "Espada Longa", "preco": 45, "arquivo": "espada_longa_1.html", "quantidade": 6 },
    { "id": "espada_longa_2", "nome": "Espada Longa", "preco": 50, "arquivo": "espada_longa_2.html", "quantidade": 5 },
    { "id": "espada_longa_3", "nome": "Espada Longa", "preco": 55, "arquivo": "espada_longa_3.html", "quantidade": 4 },
    { "id": "espada_longa_4", "nome": "Espada Longa", "preco": 60, "arquivo": "espada_longa_4.html", "quantidade": 3 },
    { "id": "espada_longa_5", "nome": "Espada Longa", "preco": 70, "arquivo": "espada_longa_5.html", "quantidade": 2 },

    { "id": "machado_duplo_6", "nome": "Machado Duplo", "preco": 65, "arquivo": "machado_duplo_6.html", "quantidade": 6 },
    { "id": "machado_duplo_7", "nome": "Machado Duplo", "preco": 68, "arquivo": "machado_duplo_7.html", "quantidade": 4 },
    { "id": "machado_duplo_8", "nome": "Machado Duplo", "preco": 72, "arquivo": "machado_duplo_8.html", "quantidade": 3 },
    { "id": "machado_duplo_9", "nome": "Machado Duplo", "preco": 75, "arquivo": "machado_duplo_9.html", "quantidade": 2 },
    { "id": "machado_duplo_10", "nome": "Machado Duplo", "preco": 80, "arquivo": "machado_duplo_10.html", "quantidade": 1 },

    { "id": "arco_curto_11", "nome": "Arco Curto", "preco": 35, "arquivo": "arco_curto_11.html", "quantidade": 5 },
    { "id": "arco_curto_12", "nome": "Arco Curto", "preco": 37, "arquivo": "arco_curto_12.html", "quantidade": 5 },
    { "id": "arco_curto_13", "nome": "Arco Curto", "preco": 40, "arquivo": "arco_curto_13.html", "quantidade": 4 },
    { "id": "arco_curto_14", "nome": "Arco Curto", "preco": 45, "arquivo": "arco_curto_14.html", "quantidade": 2 },
    { "id": "arco_curto_15", "nome": "Arco Curto", "preco": 50, "arquivo": "arco_curto_15.html", "quantidade": 2 },

    { "id": "adaga_sombria_16", "nome": "Adaga Sombria", "preco": 30, "arquivo": "adaga_sombria_16.html", "quantidade": 7 },
    { "id": "adaga_sombria_17", "nome": "Adaga Sombria", "preco": 32, "arquivo": "adaga_sombria_17.html", "quantidade": 5 },
    { "id": "adaga_sombria_18", "nome": "Adaga Sombria", "preco": 35, "arquivo": "adaga_sombria_18.html", "quantidade": 4 },
    { "id": "adaga_sombria_19", "nome": "Adaga Sombria", "preco": 40, "arquivo": "adaga_sombria_19.html", "quantidade": 2 },
    { "id": "adaga_sombria_20", "nome": "Adaga Sombria", "preco": 45, "arquivo": "adaga_sombria_20.html", "quantidade": 1 },

    { "id": "lanca_afiada_21", "nome": "Lança Afiada", "preco": 38, "arquivo": "lanca_afiada_21.html", "quantidade": 6 },
    { "id": "lanca_afiada_22", "nome": "Lança Afiada", "preco": 42, "arquivo": "lanca_afiada_22.html", "quantidade": 5 },
    { "id": "lanca_afiada_23", "nome": "Lança Afiada", "preco": 45, "arquivo": "lanca_afiada_23.html", "quantidade": 3 },
    { "id": "lanca_afiada_24", "nome": "Lança Afiada", "preco": 50, "arquivo": "lanca_afiada_24.html", "quantidade": 2 },
    { "id": "lanca_afiada_25", "nome": "Lança Afiada", "preco": 55, "arquivo": "lanca_afiada_25.html", "quantidade": 1 },

    { "id": "armadura_couro_26", "nome": "Armadura de Couro", "preco": 50, "arquivo": "armadura_couro_26.html", "quantidade": 4 },
    { "id": "armadura_couro_27", "nome": "Armadura de Couro", "preco": 55, "arquivo": "armadura_couro_27.html", "quantidade": 5 },
    { "id": "armadura_couro_28", "nome": "Armadura de Couro", "preco": 60, "arquivo": "armadura_couro_28.html", "quantidade": 3 },
    { "id": "armadura_couro_29", "nome": "Armadura de Couro", "preco": 65, "arquivo": "armadura_couro_29.html", "quantidade": 2 },
    { "id": "armadura_couro_30", "nome": "Armadura de Couro", "preco": 70, "arquivo": "armadura_couro_30.html", "quantidade": 1 },

    { "id": "armadura_metal_31", "nome": "Armadura de Metal", "preco": 90, "arquivo": "armadura_metal_31.html", "quantidade": 5 },
    { "id": "armadura_metal_32", "nome": "Armadura de Metal", "preco": 100, "arquivo": "armadura_metal_32.html", "quantidade": 3 },
    { "id": "armadura_metal_33", "nome": "Armadura de Metal", "preco": 110, "arquivo": "armadura_metal_33.html", "quantidade": 2 },
    { "id": "armadura_metal_34", "nome": "Armadura de Metal", "preco": 120, "arquivo": "armadura_metal_34.html", "quantidade": 1 },
    { "id": "armadura_metal_35", "nome": "Armadura de Metal", "preco": 130, "arquivo": "armadura_metal_35.html", "quantidade": 1 },

    { "id": "poção_de_vida_36", "nome": "Poção de Vida", "preco": 20, "arquivo": "pocao_de_vida_36.html", "quantidade": 10 },
    { "id": "poção_de_vida_37", "nome": "Poção de Vida", "preco": 25, "arquivo": "pocao_de_vida_37.html", "quantidade": 8 },
    { "id": "poção_de_vida_38", "nome": "Poção de Vida", "preco": 30, "arquivo": "pocao_de_vida_38.html", "quantidade": 6 },
    { "id": "poção_de_vida_39", "nome": "Poção de Vida", "preco": 35, "arquivo": "pocao_de_vida_39.html", "quantidade": 4 },
    { "id": "poção_de_vida_40", "nome": "Poção de Vida", "preco": 40, "arquivo": "pocao_de_vida_40.html", "quantidade": 3 },

    { "id": "poção_de_mana_41", "nome": "Poção de Mana", "preco": 15, "arquivo": "pocao_de_mana_41.html", "quantidade": 12 },
    { "id": "poção_de_mana_42", "nome": "Poção de Mana", "preco": 18, "arquivo": "pocao_de_mana_42.html", "quantidade": 10 },
    { "id": "poção_de_mana_43", "nome": "Poção de Mana", "preco": 22, "arquivo": "pocao_de_mana_43.html", "quantidade": 8 },
    { "id": "poção_de_mana_44", "nome": "Poção de Mana", "preco": 25, "arquivo": "pocao_de_mana_44.html", "quantidade": 6 },
    { "id": "poção_de_mana_45", "nome": "Poção de Mana", "preco": 30, "arquivo": "pocao_de_mana_45.html", "quantidade": 4 },

    { "id": "poção_resistência_46", "nome": "Poção de Resistência", "preco": 35, "arquivo": "pocao_resistencia_46.html", "quantidade": 7 }
]

len(itens_loja)
