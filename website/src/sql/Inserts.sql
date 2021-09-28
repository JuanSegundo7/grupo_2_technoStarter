INSERT INTO categorias VALUES(1, "Impresión 3D"),(2, "Robotica"),(3, "Electronica");
INSERT INTO usuarios VALUES(1, "Juanse Admin", "Martinez", "juansegundomartinez7@gmail.com", 1, "$2a$10$xCf5cMXdE1XIqKBhw01IkucfW2zEGxuhW7Wzu.PPXtpN/9X9F6zs.", "La Plata", "fotoAvatar-1626550899332.png"),(2, "Guido", "Padin", "guidopadin17@gmail.com", 0, "$2a$10$qoiMCk4.9FnpXV6kmcL2Z.EmvjO3LkUFocLXjtdcsKUulBZl4.7w.", "Capital Federal", "fotoAvatar-1627247489398.png");
INSERT INTO proyectos VALUES(1,"Sancho - El Robot Asistente","Cordoba - Cordoba",0,2500000,"Sancho es el primer perro robotico argentino hecho a bases de Legos! Entre sus caracteristicas mas destacables se encuentran las siguientes: Software de control habilitado para 3D - Cradle Studio Movimiento y rotación de 12 grados de libertad | 80 vatios de potencia nominal de salida 1,5 kg de carga útil | Digital Twin para sincronización en tiempo real | Algoritmo de ajuste automático de pose completa","2021-08-12", "2024-05-15", 1, 2),
(2, "Violín 3D-Varius - Primer violín Argentino impreso en 3D","Santa Rosa - La Pampa",0, 1600000, "3D Varius es el primer violin impreso en 3D por Carlos Gardel, su invención fue en el año 2012 junto a su equipo Varius, su concepto fue desarrollar un violin con todas las caracteristicas sonoras de violines profesionales en un valor mas economico y facil de conseguir", "2021-08-18", "2023-11-21", 2, 1), 
(3, "ACASIS USB 4.0","Capital Federal - Buenos Aires",0, 1700000, "El Acasis usb4.0 es la nueva introduccion a los USB 4.0 por URBO. Gracias a su nueva invencion vas a poder cargar tu celular dos veces mas rapido y vas a poder transferir toda la informacion a una velocidad increible", "2021-8-18", "2025-08-10", 1, 3), 
(4, "Zetox - Mochila Inteligente","Rawson - Chubut",0, 400000, "Zetox es una mochila inteligente que viene a revolucionar el mundo!\r\n\r\nEntre sus características se encuentran:\r\n\r\nCapacidad de 34,5 a 55 litros\r\nHidrófugo\r\nCremalleras de la más alta calidad del mercado\r\nSoporte para botella de agua integrado\r\nSoporte para teléfono móvil de fácil acceso\r\n3 compartimentos secretos (caben en un iPad / portátil)\r\nBolsillo H2O", "2021-8-18", "2024-06-04",2, 3)
-- (5, "Chess X200 - Ajedrez inteligente", 0, 600000, "Chess X200 es un tablero de ajedrez inteligente capaz de realizar y recordar jugadas por si mismo al estar integrado con una computadora inteligente. Las piezas en el tablero se mueven solas gracias al uso de imanes en la base de las mismas. Es excelentes para poder jugar por uno mismo, ademas de para practicar y mejorar en estrategias, ya que el tableto puedo aprender nuestro patron de juego y dar feedback sobre posibles jugadas para ganar.","2021-09-07", "2023-04-24", 2, 3),
-- (6, "Proxer Vitali - Yeso 3D", 0, 3000000, "Proxer Vitali es una impresora 3D capaz de imprimir yesos y/o ferulas para el tratamiento de multiples tipos de fracturas y otras lesiones similares, sin importar el area del cuerpo en que haya ocurrido. Proxer Vitali cuenta con varios tipos de modelos de ferulas para tratar las lesiones sin tener la incomodidad del yeso tradicional, estos son faciles de limpiar y de remover una vez la lesion se encuentre curada. Proxer Vitali es unicamente para uso medico.", "2021-09-08", "2023-07-30", 2, 2),
-- (7, "Sybil | El robot de jardin inteligente impulsado por machine learning", 0, 2500000, "Sybil es la compañera de jardín más inteligente que existe. Sybil puede plantar semillas y mantener las malas hierbas lejos de su jardín, todo por su cuenta. Completamente libre de químicos y sin necesidad de WiFi. Con el tiempo, Sybil aprende qué lugares del jardín necesitan más atención que otros, maximizando aún más el uso de la batería. De forma predeterminada, si no se detectan plantas en el área del jardín después de crear los mapas, Sybil comenzará a planificar las semillas por su cuenta. Syble no solo deja caer las semillas al suelo. Ella usa un brazo para plantarlos en la tierra misma.","2021-09-09","2023-12-11", 1, 1)
INSERT INTO tipo_contribucion VALUES(1, "Bronce", 1000, "Con la contribucion Bronce, te podes llevar: Un robot Sancho y un poster.", 1),(2, "Plata", 5000, "Con la contribucion Plata, te podes llevar: 2 robot Sancho y una membrecia al fan club.", 1),(3, "Oro", 10000, "Con la contribucion Oro, te podes llevar: 4 robot Sancho y tu nombre en el mural conmemorativo de la empresa.", 1),
(4, "Bronce", 2000, "Con la contribucion Bronce, te podes llevar: Un Violin 3D Varius", 2),(5, "Plata", 4000, "Con la contribucion Plata, te podes llevar: 2 Violines 3D Varius y un libro de aprendizaje.", 2),(6, "Oro", 8000, "Con la contribucion Oro, te podes llevar: 3 Violines 3D Varius y una entrada al concierto La Filarmónica de Viena.", 2),
(7, "Bronce", 3000, "Con la contribucion Bronce, te podes llevar: Un ACASIS USB 4.0", 3),(8, "Plata", 6000, "Con la contribucion Plata, te podes llevar: 2 ACASIS USB 4.0 y una revista de tecnologia.", 3),(9, "Oro", 10000, "Con la contribucion Oro, te podes llevar: 4 ACASIS USB 4.0 y un monitor de 24 pulgadas de Noga.", 3),
(10, "Bronce", 1000, "Con la contribucion Bronce, te podes llevar: Una mochila Zetox", 4),(11, "Plata", 3000, "Con la contribucion Plata, te podes llevar: 2 mochilas Zetox y una riñonera de regalo.", 4),(12, "Oro", 6000, "Con la contribucion Oro, te podes llevar: 3 mochilas Zetox y una carpa para 2 personas.", 4)
INSERT INTO contribucion_usuarios VALUES (1,2,1,3);
INSERT INTO imagenes VALUES (1,"/Sancho-ElRobotAsistente/fotosProyecto-1627172891517.png",1),(2,"/Sancho-ElRobotAsistente/fotosProyecto-1627172894857.png",1),(3,"/Sancho-ElRobotAsistente/fotosProyecto-1627172894852.jpg",1),
(4,"/Violín3D-Varius-PrimerviolínArgentinoimpresoen3D/fotosProyecto-1626736035851.jpg",2),(5,"/Violín3D-Varius-PrimerviolínArgentinoimpresoen3D/fotosProyecto-1626736035845.jpg",2),(6,"/Violín3D-Varius-PrimerviolínArgentinoimpresoen3D/fotosProyecto-1626736035849.jpg",2),
(7,"/ACASISUSB4.0/fotosProyecto-1626915281682.jpg",3),(8,"/ACASISUSB4.0/fotosProyecto-1626915281688.jpg",3),(9,"/ACASISUSB4.0/fotosProyecto-1626915281687.jpg",3),
(10,"/Zetox-MochilaInteligente/fotosProyecto-1628640749425.jpg",4);