CREATE DATABASE omnitrix
GO


USE omnitrix
GO

CREATE TABLE Usuario(
Id_Usuario BIGINT IDENTITY (1,1) PRIMARY KEY,
Nombre NVARCHAR(50) UNIQUE NOT NULL,
Nick NVARCHAR(50) UNIQUE NOT NULL,
Correo NVARCHAR(40) UNIQUE NOT NULL,
Contrasenia NVARCHAR(200) NOT NULL,
Fecha_Nacimiento DATE,
Verificacion_Clave NVARCHAR(300),
Estatus BIT DEFAULT '0',
)
GO
CREATE TABLE Datos(
Id_Datos BIGINT IDENTITY (1,1) PRIMARY KEY,
Id_Usuario BIGINT FOREIGN KEY REFERENCES Usuario(Id_Usuario) NOT NULL,
Vocacion NVARCHAR(60),
Ciudad NVARCHAR(30),
Pais NVARCHAR(40),
Estado NVARCHAR(200),
Seguidores BIGINT,
Siguiendo BIGINT,
NombreArtistico NVARCHAR(100),
Imagen_Perfil NVARCHAR(80),
Imagen_Portada NVARCHAR(80),
Telefono NVARCHAR(20),
Telefono_Casa NVARCHAR(20),
Biografia NVARCHAR(300)
)
GO
CREATE TABLE Amistad(
Id_Amistad BIGINT PRIMARY KEY IDENTITY (1,1),
Id_Usuario BIGINT FOREIGN KEY REFERENCES Usuario(Id_Usuario) NOT NULL,
Id_Usuario_Dos BIGINT FOREIGN KEY REFERENCES Usuario(Id_Usuario) NOT NULL
)
GO

CREATE TABLE Publicacion(
Id_Publicacion BIGINT IDENTITY PRIMARY KEY,
Id_Usuario BIGINT FOREIGN KEY REFERENCES Usuario(Id_Usuario) NOT NULL,
Id_Amistad BIGINT FOREIGN KEY REFERENCES Amistad(Id_Amistad),
Titulo NVARCHAR(150),
Imagen NVARCHAR(80),
Tipo INT,
Descripcion NVARCHAR(300),
Fuente NVARCHAR(200) NULL,
Fecha_Publicacion DATETIME NOT NULL
)
GO
CREATE TABLE Comentario(
Id_Comentario BIGINT IDENTITY (1,1) PRIMARY KEY,
Id_Usuario BIGINT FOREIGN KEY REFERENCES Usuario(Id_Usuario) NOT NULL,
Id_Publicacion BIGINT FOREIGN KEY REFERENCES Publicacion(Id_Publicacion) NOT NULL,
Comentario NVARCHAR(260)
)
GO
CREATE TABLE Notificacion(
Id_Notificacion BIGINT IDENTITY (1,1) PRIMARY KEY,
Id_Publicacion BIGINT FOREIGN KEY REFERENCES Publicacion(Id_Publicacion) NOT NULL,
Estatus INT DEFAULT '1'
)
GO
CREATE PROCEDURE [dbo].[sp_UpNombre]
@Variable NVARCHAR(50),
@Id INT
AS
UPDATE Usuario SET Nombre = @Variable 
WHERE Id_Usuario = @Id
GO

CREATE PROCEDURE [dbo].[sp_UpNick]
@Variable NVARCHAR(50),
@Id INT
AS
UPDATE Usuario SET Nick = @Variable 
WHERE Id_Usuario = @Id
GO
CREATE PROCEDURE [dbo].[sp_UpCorreo]
@Variable NVARCHAR(40),
@Id INT
AS
UPDATE Usuario SET Correo = @Variable 
WHERE Id_Usuario = @Id
GO
CREATE PROCEDURE [dbo].[sp_UpContrasenia]
@Variable NVARCHAR(200),
@Id INT
AS
UPDATE Usuario SET Contrasenia = @Variable 
WHERE Id_Usuario = @Id
GO
CREATE PROCEDURE [dbo].[sp_UpImagen_Perfil]
@Variable NVARCHAR(80),
@Id INT
AS
UPDATE Usuario SET Imagen_Perfil = @Variable 
WHERE Id_Usuario = @Id
GO
CREATE PROCEDURE [dbo].[sp_UpImagen_Portada]
@Variable NVARCHAR(80),
@Id INT
AS
UPDATE Usuario SET Imagen_Portada = @Variable 
WHERE Id_Usuario = @Id
GO
CREATE PROCEDURE [dbo].[sp_UpTelefono]
@Variable NVARCHAR(20),
@Id INT
AS
UPDATE Usuario SET Telefono = @Variable 
WHERE Id_Usuario = @Id
GO
CREATE PROCEDURE [dbo].[sp_UpTelefono_Casa]
@Variable NVARCHAR(20),
@Id INT
AS
UPDATE Usuario SET Telefono_Casa = @Variable 
WHERE Id_Usuario = @Id
GO
CREATE PROCEDURE [dbo].[sp_UpBiografia]
@Variable NVARCHAR(300),
@Id INT
AS
UPDATE Usuario SET Biografia = @Variable 
WHERE Id_Usuario = @Id
GO
CREATE PROCEDURE [dbo].[sp_UpComentario]
@Variable NVARCHAR(260),
@Id INT
AS
UPDATE Comentario SET Comentario = @Variable 
WHERE Id_Comentario = @Id
GO
CREATE PROCEDURE[dbo].[sp_InImg_Perfil]
@Variable NVARCHAR(80)
AS
INSERT INTO Usuario(Imagen_Perfil)
Values (@Variable)
GO
CREATE PROCEDURE[dbo].[sp_InImg_Portada]
@Variable NVARCHAR(80)
AS
INSERT INTO Usuario(Imagen_Portada)
Values (@Variable)
GO
CREATE PROCEDURE[dbo].[sp_InAmistad]
@Id1 INT,
@Id2 INT
AS
INSERT INTO Amistad(Id_Usuario, Id_Usuario_Dos)
VALUES(@Id1, @Id2)
GO
CREATE PROCEDURE[dbo].[sp_InPublicacion]
@Id INT,
@Variable NVARCHAR(150),
@Variable2 NVARCHAR(80)
AS
INSERT INTO Publicacion(Id_Usuario, Titulo, Imagen, Fecha_Publicacion)
VALUES(@Id, @Variable, @Variable2, CURRENT_TIMESTAMP)
GO
CREATE PROCEDURE [dbo].[sp_InComentario]
@Id INT,
@Id2 INT,
@Variable NVARCHAR(260)
AS
INSERT INTO Comentario(Id_Usuario, Id_Publicacion, Comentario)
VALUES (@Id, @Id2, @Variable)
GO
CREATE PROCEDURE [dbo].[sp_InUsuario]
@Nombre NVARCHAR(50),
@Correo NVARCHAR(40),
@Contrasenia NVARCHAR(200),
@FechaNacimiento Date
AS
	INSERT INTO Usuario(Nombre, Correo, Contrasenia, Fecha_Nacimiento) VALUES(@Nombre, @Correo, @Contrasenia, @FechaNacimiento)
	DECLARE @lastId INT
	SET @lastId = (SELECT MAX(Id_Usuario) FROM Usuario)
	SELECT * FROM Usuario WHERE Id_Usuario = @lastId
GO
CREATE PROCEDURE [dbo].[sp_LoginUser]
@_Nick NVARCHAR(50),
@_Password NVARCHAR(200)
AS
	SELECT * FROM Usuario WHERE Nick = @_Nick AND Contrasenia = @_Password
=======
CREATE PROCEDURE [dbo].[sp_InComentario]
@Id_Usuario INT,
@Id_Publicacion INT,
@Comentario NVARCHAR(260)
AS
	INSERT INTO Comentario(Id_Usuario, Id_Publicacion, Comentario) VALUES (@Id_Usuario, @Id_Publicacion, @Comentario)
	DECLARE @lastCom INT
	SET @lastCom = (SELECT MAX(Id_Comentario) FROM Comentario)
	SELECT * FROM Comentario WHERE Id_Comentario = @lastCom
GO

CREATE PROCEDURE [dbo].[sp_InAmistad]
@Id_Usuario INT,
@Id_Usuario_Dos INT
AS
	INSERT INTO Amistad(Id_Usuario, Id_Usuario_Dos) VALUES (@Id_Usuario, @Id_Usuario_Dos)
	DECLARE @lastAm INT
	SET @lastAm = (SELECT MAX(Id_Amistad) FROM Amistad)
	SELECT * FROM Amistad WHERE Id_Amistad = @lastAm
GO

---------------------------------
--CREACION DE SP'S COCCHE

--CREACION DE SP DE notificacion
CREATE PROCEDURE [dbo].[sp_obtenerNotificacion]
@IdUsuario INT
AS
	SELECT TOP 3 U.Nombre, D.Imagen_Perfil, P.Titulo FROM Usuario U
	INNER JOIN Amistad A ON A.Id_Usuario = U.Id_Usuario
	INNER JOIN Datos D ON D.Id_Usuario = U.Id_Usuario
	INNER JOIN Publicacion P ON P.Id_Amistad = A.Id_Amistad 
	INNER JOIN Notificacion N ON N.Id_Publicacion = P.Id_Publicacion WHERE U.Id_Usuario = @IdUsuario
GO

--CREACION DE SP para obtener la imagen del usuario actual
CREATE PROCEDURE [dbo].[sp_obtenerImagenPerfil]
@IdUsuario INT
AS
	SELECT D.Imagen_Perfil FROM Usuario U
	INNER JOIN Datos D ON D.Id_Usuario = U.Id_Usuario WHERE U.Id_Usuario = @IdUsuario
GO

--CREACION DE SP para obtener la imagen de portada del usuario actual
CREATE PROCEDURE [dbo].[sp_obtenerImagenPortadaPerfil]
@IdUsuario INT
AS
	SELECT D.Imagen_Portada FROM Usuario U
	INNER JOIN Datos D ON D.Id_Usuario = U.Id_Usuario WHERE U.Id_Usuario = @IdUsuario
GO

--CREACION DE SP para obtener el nombre del usuario actual
CREATE PROCEDURE [dbo].[sp_obtenerNombrePerfil]
@IdUsuario INT
AS
	SELECT U.Nombre FROM Usuario U WHERE U.Id_Usuario = @IdUsuario
GO

--CREACION DE SP para obtener la vocacion del usuario actual
CREATE PROCEDURE [dbo].[sp_obtenerVocacionPerfil]
@IdUsuario INT
AS
	SELECT D.Vocacion FROM Usuario U
	INNER JOIN Datos D ON D.Id_Usuario = U.Id_Usuario WHERE U.Id_Usuario = @IdUsuario
GO

--CREACION DE SP para obtener la ubicacion del usuario actual
CREATE PROCEDURE [dbo].[sp_obtenerUbicacionPerfil]
@IdUsuario INT
AS
	SELECT D.Ciudad, D.Pais FROM Usuario U
	INNER JOIN Datos D ON D.Id_Usuario = U.Id_Usuario WHERE U.Id_Usuario = @IdUsuario
GO

--CREACION DE SP para obtener la ubicacion del usuario actual
CREATE PROCEDURE [dbo].[sp_obtenerEstadoPerfil]
@IdUsuario INT
AS
	SELECT D.Estado FROM Usuario U
	INNER JOIN Datos D ON D.Id_Usuario = U.Id_Usuario WHERE U.Id_Usuario = @IdUsuario
GO

--CREACION DE SP para obtener los seguidores del usuario actual
CREATE PROCEDURE [dbo].[sp_obtenerSeguidoresPerfil]
@IdUsuario INT
AS
	SELECT D.Seguidores FROM Usuario U
	INNER JOIN Datos D ON D.Id_Usuario = U.Id_Usuario WHERE U.Id_Usuario = @IdUsuario
GO

--CREACION DE SP para obtener siguiendo del usuario actual
CREATE PROCEDURE [dbo].[sp_obtenerSiguiendoPerfil]
@IdUsuario INT
AS
	SELECT D.Siguiendo FROM Usuario U
	INNER JOIN Datos D ON D.Id_Usuario = U.Id_Usuario WHERE U.Id_Usuario = @IdUsuario
GO

--CREACION DE SP para obtener nick, imagen de usuario y vocacion de los amigos del usuario actual
CREATE PROCEDURE [dbo].[sp_obtenerPerfilAmigos]
@IdUsuario INT
AS
	SELECT D.Imagen_Perfil, U.Nick, D.Vocacion FROM Amistad A
	INNER JOIN Datos D ON D.Id_Usuario = A.Id_Usuario_Dos 
	INNER JOIN Usuario U ON U.Id_Usuario = A.Id_Usuario_Dos
	WHERE A.Id_Usuario = @IdUsuario
GO

--CREACION DE SP para obtener no telefonico del usuario actual
CREATE PROCEDURE [dbo].[sp_obtenernoTelefonico]
@IdUsuario INT
As
	SELECT D.Telefono FROM Datos D WHERE D.Id_Usuario = @IdUsuario
GO

--CREACION DE SP para obtener no telefonico casa del usuario actual
CREATE PROCEDURE [dbo].[sp_obtenernoTelefonicoCasa]
@IdUsuario INT
As
	SELECT D.Telefono_Casa FROM Datos D WHERE D.Id_Usuario = @IdUsuario
GO

--CREACION DE SP para obtener la biografia de un usuario
CREATE PROCEDURE [dbo].[sp_obtenerBiografia]
@IdUsuario INT
As
	SELECT D.Biografia FROM Datos D WHERE D.Id_Usuario = @IdUsuario
GO

