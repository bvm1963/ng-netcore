USE [NgNetCore]
GO
/****** Object:  Table [dbo].[tdbDocumentsDepartment1]    Script Date: 01.11.2017 8:55:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tdbDocumentsDepartment1](
	[DocumentsDepartment1ID] [int] IDENTITY(1,1) NOT NULL,
	[MagazinesID] [int] NOT NULL,
	[OperationsID] [int] NOT NULL,
	[ParametersID] [int] NOT NULL,
	[Data1] [money] NULL,
	[Data2] [money] NULL,
	[OperationsName] [varchar](50) NOT NULL,
	[Parameter] [varchar](50) NOT NULL,
	[Note] [varchar](100) NULL,
	[DateRecord] [datetime] NOT NULL,
 CONSTRAINT [PK_tdbDocumentsDepartment1] PRIMARY KEY CLUSTERED 
(
	[DocumentsDepartment1ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tdbDocumentsDepartment2]    Script Date: 01.11.2017 8:55:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tdbDocumentsDepartment2](
	[DocumentsDepartment2ID] [int] IDENTITY(1,1) NOT NULL,
	[MagazinesID] [int] NOT NULL,
	[OperationsID] [int] NOT NULL,
	[ParametersID] [int] NOT NULL,
	[Data1] [money] NULL,
	[Data2] [money] NULL,
	[Data3] [money] NULL,
	[Data4] [money] NULL,
	[OperationsName] [varchar](50) NOT NULL,
	[Parameter] [varchar](50) NOT NULL,
	[Note] [varchar](100) NULL,
	[DateRecord] [datetime] NOT NULL,
 CONSTRAINT [PK_tdbDocumentsDepartment2] PRIMARY KEY CLUSTERED 
(
	[DocumentsDepartment2ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tdbDocumentsDepartment3]    Script Date: 01.11.2017 8:55:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tdbDocumentsDepartment3](
	[DocumentsDepartment3ID] [int] IDENTITY(1,1) NOT NULL,
	[MagazinesID] [int] NOT NULL,
	[OperationsID] [int] NOT NULL,
	[ParametersID] [int] NOT NULL,
	[Data1] [money] NULL,
	[OperationsName] [varchar](50) NOT NULL,
	[Parameter] [varchar](50) NOT NULL,
	[Note] [varchar](100) NULL,
	[DateRecord] [datetime] NOT NULL,
 CONSTRAINT [PK_tdbDocumentsDepartment3] PRIMARY KEY CLUSTERED 
(
	[DocumentsDepartment3ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tdbMagazines]    Script Date: 01.11.2017 8:55:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tdbMagazines](
	[MagazinesID] [int] IDENTITY(1,1) NOT NULL,
	[UserID] [nvarchar](450) NOT NULL,
	[OperationsID] [int] NOT NULL,
	[NumberDocument] [varchar](50) NULL,
	[DateDocument] [datetime] NOT NULL,
	[UserName] [varchar](50) NOT NULL,
	[Note] [varchar](100) NULL,
	[DateRecord] [datetime] NOT NULL,
	[OperationsName] [varchar](50) NOT NULL,
	[OperationsCode] [varchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[MagazinesID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tdbMainMenu]    Script Date: 01.11.2017 8:55:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tdbMainMenu](
	[MainMenuID] [int] IDENTITY(1,1) NOT NULL,
	[ParentID] [int] NOT NULL,
	[MenuName] [nvarchar](50) NULL,
	[MenuCaption] [nvarchar](50) NULL,
	[PageRoute] [varchar](50) NULL,
	[Icon] [varchar](50) NULL,
	[ItemTypeInt] [int] NULL,
	[Group1] [varchar](50) NULL,
	[Group2] [int] NULL,
	[OperationsIDStr] [nvarchar](2000) NULL,
 CONSTRAINT [PK_tdbMainMenu] PRIMARY KEY CLUSTERED 
(
	[MainMenuID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tdbOperations]    Script Date: 01.11.2017 8:55:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tdbOperations](
	[OperationsID] [int] IDENTITY(1,1) NOT NULL,
	[OperationsName] [varchar](50) NOT NULL,
	[OperationsCaption] [nvarchar](50) NOT NULL,
	[OperationsCode] [varchar](50) NOT NULL,
	[Group1] [varchar](50) NULL,
	[Group2] [int] NULL,
 CONSTRAINT [PK_tdbOperations] PRIMARY KEY CLUSTERED 
(
	[OperationsID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tdbOperationsParameters]    Script Date: 01.11.2017 8:55:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tdbOperationsParameters](
	[OperationsParametersID] [int] IDENTITY(1,1) NOT NULL,
	[OperationsID] [int] NOT NULL,
	[ParametersID] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[OperationsParametersID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tdbParameters]    Script Date: 01.11.2017 8:55:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tdbParameters](
	[ParametersID] [int] IDENTITY(1,1) NOT NULL,
	[Parameter] [varchar](50) NOT NULL,
	[Note] [varchar](100) NULL,
	[Group1] [varchar](50) NULL,
	[Group2] [int] NULL,
	[DateRecord] [datetime] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ParametersID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  View [dbo].[vtdbDocumentsDepartment1]    Script Date: 01.11.2017 8:55:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO






--Bronasco 261017

CREATE  VIEW [dbo].[vtdbDocumentsDepartment1]

AS

SELECT 	a.*
 FROM tdbDocumentsDepartment1 a












GO
/****** Object:  View [dbo].[vtdbDocumentsDepartment2]    Script Date: 01.11.2017 8:55:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO






--Bronasco 261017

CREATE  VIEW [dbo].[vtdbDocumentsDepartment2]

AS

SELECT 	a.*
 FROM tdbDocumentsDepartment2 a












GO
/****** Object:  View [dbo].[vtdbDocumentsDepartment3]    Script Date: 01.11.2017 8:55:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO






--Bronasco 261017

CREATE  VIEW [dbo].[vtdbDocumentsDepartment3]

AS

SELECT 	a.*
 FROM tdbDocumentsDepartment3 a












GO
/****** Object:  View [dbo].[vtdbMagazines]    Script Date: 01.11.2017 8:55:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO






--Bronasco 261017

CREATE  VIEW [dbo].[vtdbMagazines]

AS

SELECT 	a.*
 FROM tdbMagazines a












GO
/****** Object:  View [dbo].[vtdbMainMenu]    Script Date: 01.11.2017 8:55:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO





--Bronasco 261017

CREATE  VIEW [dbo].[vtdbMainMenu]

AS

SELECT 	a.MainMenuID as Id,
	a.ParentID,
	a.MenuName,
	a.MenuCaption,
	a.PageRoute,
	a.Icon,
	a.MainMenuID,
	a.ItemTypeInt,
	a.Group1,
	a.Group2,
	a.OperationsIDStr
 FROM tdbMainMenu a










GO
/****** Object:  View [dbo].[vtdbOperations]    Script Date: 01.11.2017 8:55:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO




--Bronasco 261017

CREATE  VIEW [dbo].[vtdbOperations]

AS

SELECT 	a.OperationsID as Id,
	a.OperationsName,
	a.OperationsCaption,
	a.OperationsCode,
	a.Group1,
	a.Group2
 FROM tdbOperations a










GO
/****** Object:  View [dbo].[vtdbOperationsParameters]    Script Date: 01.11.2017 8:55:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO





--Bronasco 261017

CREATE  VIEW [dbo].[vtdbOperationsParameters]

AS

SELECT a.*, b.Parameter 
FROM tdbOperationsParameters a
	join tdbParameters b on b.ParametersID = a.ParametersID











GO
SET IDENTITY_INSERT [dbo].[tdbDocumentsDepartment1] ON 

INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (1, 1, 1, 1, NULL, NULL, N'Operation_77001', N'Parameter 1', NULL, CAST(N'2017-10-27T14:05:07.603' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (2, 1, 1, 2, NULL, NULL, N'Operation_77001', N'Parameter 2', NULL, CAST(N'2017-10-27T14:05:07.603' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (3, 1, 1, 3, NULL, NULL, N'Operation_77001', N'Parameter 3', NULL, CAST(N'2017-10-27T14:05:07.603' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (4, 1, 1, 4, NULL, NULL, N'Operation_77001', N'Parameter 4', NULL, CAST(N'2017-10-27T14:05:07.603' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (5, 2, 1, 1, NULL, NULL, N'Operation_77001', N'Parameter 1', NULL, CAST(N'2017-10-27T14:05:12.160' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (6, 2, 1, 2, NULL, NULL, N'Operation_77001', N'Parameter 2', NULL, CAST(N'2017-10-27T14:05:12.160' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (7, 2, 1, 3, NULL, NULL, N'Operation_77001', N'Parameter 3', NULL, CAST(N'2017-10-27T14:05:12.160' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (8, 2, 1, 4, NULL, NULL, N'Operation_77001', N'Parameter 4', NULL, CAST(N'2017-10-27T14:05:12.160' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (9, 3, 1, 1, NULL, NULL, N'Operation_77001', N'Parameter 1', NULL, CAST(N'2017-10-27T14:05:16.140' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (10, 3, 1, 2, NULL, NULL, N'Operation_77001', N'Parameter 2', NULL, CAST(N'2017-10-27T14:05:16.140' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (11, 3, 1, 3, NULL, NULL, N'Operation_77001', N'Parameter 3', NULL, CAST(N'2017-10-27T14:05:16.140' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (12, 3, 1, 4, NULL, NULL, N'Operation_77001', N'Parameter 4', NULL, CAST(N'2017-10-27T14:05:16.140' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (13, 4, 1, 1, NULL, NULL, N'Operation_77001', N'Parameter 1', NULL, CAST(N'2017-10-27T14:05:19.867' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (14, 4, 1, 2, NULL, NULL, N'Operation_77001', N'Parameter 2', NULL, CAST(N'2017-10-27T14:05:19.867' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (15, 4, 1, 3, NULL, NULL, N'Operation_77001', N'Parameter 3', NULL, CAST(N'2017-10-27T14:05:19.867' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (16, 4, 1, 4, NULL, NULL, N'Operation_77001', N'Parameter 4', NULL, CAST(N'2017-10-27T14:05:19.867' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (17, 5, 2, 1, NULL, NULL, N'Operation_77002', N'Parameter 1', NULL, CAST(N'2017-10-27T14:05:29.910' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (18, 5, 2, 2, NULL, NULL, N'Operation_77002', N'Parameter 2', NULL, CAST(N'2017-10-27T14:05:29.910' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (19, 5, 2, 3, NULL, NULL, N'Operation_77002', N'Parameter 3', NULL, CAST(N'2017-10-27T14:05:29.910' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (20, 5, 2, 4, NULL, NULL, N'Operation_77002', N'Parameter 4', NULL, CAST(N'2017-10-27T14:05:29.910' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (21, 5, 2, 5, NULL, NULL, N'Operation_77002', N'Parameter 5', NULL, CAST(N'2017-10-27T14:05:29.910' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (22, 5, 2, 6, NULL, NULL, N'Operation_77002', N'Parameter 6', NULL, CAST(N'2017-10-27T14:05:29.910' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (23, 5, 2, 7, NULL, NULL, N'Operation_77002', N'Parameter 7', NULL, CAST(N'2017-10-27T14:05:29.910' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (24, 6, 2, 1, NULL, NULL, N'Operation_77002', N'Parameter 1', NULL, CAST(N'2017-10-27T14:05:33.647' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (25, 6, 2, 2, NULL, NULL, N'Operation_77002', N'Parameter 2', NULL, CAST(N'2017-10-27T14:05:33.647' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (26, 6, 2, 3, NULL, NULL, N'Operation_77002', N'Parameter 3', NULL, CAST(N'2017-10-27T14:05:33.647' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (27, 6, 2, 4, NULL, NULL, N'Operation_77002', N'Parameter 4', NULL, CAST(N'2017-10-27T14:05:33.647' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (28, 6, 2, 5, NULL, NULL, N'Operation_77002', N'Parameter 5', NULL, CAST(N'2017-10-27T14:05:33.647' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (29, 6, 2, 6, NULL, NULL, N'Operation_77002', N'Parameter 6', NULL, CAST(N'2017-10-27T14:05:33.647' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (30, 6, 2, 7, NULL, NULL, N'Operation_77002', N'Parameter 7', NULL, CAST(N'2017-10-27T14:05:33.647' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (31, 7, 2, 1, NULL, NULL, N'Operation_77002', N'Parameter 1', NULL, CAST(N'2017-10-27T14:05:38.067' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (32, 7, 2, 2, NULL, NULL, N'Operation_77002', N'Parameter 2', NULL, CAST(N'2017-10-27T14:05:38.067' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (33, 7, 2, 3, NULL, NULL, N'Operation_77002', N'Parameter 3', NULL, CAST(N'2017-10-27T14:05:38.067' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (34, 7, 2, 4, NULL, NULL, N'Operation_77002', N'Parameter 4', NULL, CAST(N'2017-10-27T14:05:38.067' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (35, 7, 2, 5, NULL, NULL, N'Operation_77002', N'Parameter 5', NULL, CAST(N'2017-10-27T14:05:38.067' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (36, 7, 2, 6, NULL, NULL, N'Operation_77002', N'Parameter 6', NULL, CAST(N'2017-10-27T14:05:38.067' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (37, 7, 2, 7, NULL, NULL, N'Operation_77002', N'Parameter 7', NULL, CAST(N'2017-10-27T14:05:38.067' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (38, 8, 2, 1, NULL, NULL, N'Operation_77002', N'Parameter 1', NULL, CAST(N'2017-10-27T14:05:42.427' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (39, 8, 2, 2, NULL, NULL, N'Operation_77002', N'Parameter 2', NULL, CAST(N'2017-10-27T14:05:42.427' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (40, 8, 2, 3, NULL, NULL, N'Operation_77002', N'Parameter 3', NULL, CAST(N'2017-10-27T14:05:42.427' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (41, 8, 2, 4, NULL, NULL, N'Operation_77002', N'Parameter 4', NULL, CAST(N'2017-10-27T14:05:42.427' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (42, 8, 2, 5, NULL, NULL, N'Operation_77002', N'Parameter 5', NULL, CAST(N'2017-10-27T14:05:42.427' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (43, 8, 2, 6, NULL, NULL, N'Operation_77002', N'Parameter 6', NULL, CAST(N'2017-10-27T14:05:42.427' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment1] ([DocumentsDepartment1ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (44, 8, 2, 7, NULL, NULL, N'Operation_77002', N'Parameter 7', NULL, CAST(N'2017-10-27T14:05:42.427' AS DateTime))
SET IDENTITY_INSERT [dbo].[tdbDocumentsDepartment1] OFF
SET IDENTITY_INSERT [dbo].[tdbDocumentsDepartment2] ON 

INSERT [dbo].[tdbDocumentsDepartment2] ([DocumentsDepartment2ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [Data3], [Data4], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (1, 9, 3, 1, NULL, NULL, NULL, NULL, N'Operation_77003', N'Parameter 1', NULL, CAST(N'2017-10-27T14:05:54.340' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment2] ([DocumentsDepartment2ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [Data3], [Data4], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (2, 9, 3, 7, NULL, NULL, NULL, NULL, N'Operation_77003', N'Parameter 7', NULL, CAST(N'2017-10-27T14:05:54.340' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment2] ([DocumentsDepartment2ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [Data3], [Data4], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (3, 9, 3, 8, NULL, NULL, NULL, NULL, N'Operation_77003', N'Parameter 8', NULL, CAST(N'2017-10-27T14:05:54.340' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment2] ([DocumentsDepartment2ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [Data3], [Data4], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (4, 9, 3, 9, NULL, NULL, NULL, NULL, N'Operation_77003', N'Parameter 9', NULL, CAST(N'2017-10-27T14:05:54.340' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment2] ([DocumentsDepartment2ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [Data3], [Data4], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (5, 9, 3, 10, NULL, NULL, NULL, NULL, N'Operation_77003', N'Parameter 10', NULL, CAST(N'2017-10-27T14:05:54.340' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment2] ([DocumentsDepartment2ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [Data3], [Data4], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (6, 10, 3, 1, NULL, NULL, NULL, NULL, N'Operation_77003', N'Parameter 1', NULL, CAST(N'2017-10-27T14:05:58.650' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment2] ([DocumentsDepartment2ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [Data3], [Data4], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (7, 10, 3, 7, NULL, NULL, NULL, NULL, N'Operation_77003', N'Parameter 7', NULL, CAST(N'2017-10-27T14:05:58.650' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment2] ([DocumentsDepartment2ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [Data3], [Data4], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (8, 10, 3, 8, NULL, NULL, NULL, NULL, N'Operation_77003', N'Parameter 8', NULL, CAST(N'2017-10-27T14:05:58.650' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment2] ([DocumentsDepartment2ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [Data3], [Data4], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (9, 10, 3, 9, NULL, NULL, NULL, NULL, N'Operation_77003', N'Parameter 9', NULL, CAST(N'2017-10-27T14:05:58.650' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment2] ([DocumentsDepartment2ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [Data3], [Data4], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (10, 10, 3, 10, NULL, NULL, NULL, NULL, N'Operation_77003', N'Parameter 10', NULL, CAST(N'2017-10-27T14:05:58.650' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment2] ([DocumentsDepartment2ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [Data3], [Data4], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (11, 11, 3, 1, NULL, NULL, NULL, NULL, N'Operation_77003', N'Parameter 1', NULL, CAST(N'2017-10-27T14:06:02.560' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment2] ([DocumentsDepartment2ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [Data3], [Data4], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (12, 11, 3, 7, NULL, NULL, NULL, NULL, N'Operation_77003', N'Parameter 7', NULL, CAST(N'2017-10-27T14:06:02.560' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment2] ([DocumentsDepartment2ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [Data3], [Data4], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (13, 11, 3, 8, NULL, NULL, NULL, NULL, N'Operation_77003', N'Parameter 8', NULL, CAST(N'2017-10-27T14:06:02.560' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment2] ([DocumentsDepartment2ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [Data3], [Data4], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (14, 11, 3, 9, NULL, NULL, NULL, NULL, N'Operation_77003', N'Parameter 9', NULL, CAST(N'2017-10-27T14:06:02.560' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment2] ([DocumentsDepartment2ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [Data3], [Data4], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (15, 11, 3, 10, NULL, NULL, NULL, NULL, N'Operation_77003', N'Parameter 10', NULL, CAST(N'2017-10-27T14:06:02.560' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment2] ([DocumentsDepartment2ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [Data3], [Data4], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (16, 12, 3, 1, NULL, NULL, NULL, NULL, N'Operation_77003', N'Parameter 1', NULL, CAST(N'2017-10-27T14:06:06.820' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment2] ([DocumentsDepartment2ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [Data3], [Data4], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (17, 12, 3, 7, NULL, NULL, NULL, NULL, N'Operation_77003', N'Parameter 7', NULL, CAST(N'2017-10-27T14:06:06.820' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment2] ([DocumentsDepartment2ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [Data3], [Data4], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (18, 12, 3, 8, NULL, NULL, NULL, NULL, N'Operation_77003', N'Parameter 8', NULL, CAST(N'2017-10-27T14:06:06.820' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment2] ([DocumentsDepartment2ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [Data3], [Data4], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (19, 12, 3, 9, NULL, NULL, NULL, NULL, N'Operation_77003', N'Parameter 9', NULL, CAST(N'2017-10-27T14:06:06.820' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment2] ([DocumentsDepartment2ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [Data2], [Data3], [Data4], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (20, 12, 3, 10, NULL, NULL, NULL, NULL, N'Operation_77003', N'Parameter 10', NULL, CAST(N'2017-10-27T14:06:06.820' AS DateTime))
SET IDENTITY_INSERT [dbo].[tdbDocumentsDepartment2] OFF
SET IDENTITY_INSERT [dbo].[tdbDocumentsDepartment3] ON 

INSERT [dbo].[tdbDocumentsDepartment3] ([DocumentsDepartment3ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (1, 13, 4, 7, NULL, N'Operation_77004', N'Parameter 7', NULL, CAST(N'2017-10-27T14:06:16.200' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment3] ([DocumentsDepartment3ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (2, 13, 4, 8, NULL, N'Operation_77004', N'Parameter 8', NULL, CAST(N'2017-10-27T14:06:16.200' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment3] ([DocumentsDepartment3ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (3, 13, 4, 9, NULL, N'Operation_77004', N'Parameter 9', NULL, CAST(N'2017-10-27T14:06:16.200' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment3] ([DocumentsDepartment3ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (4, 14, 4, 7, NULL, N'Operation_77004', N'Parameter 7', NULL, CAST(N'2017-10-27T14:06:20.303' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment3] ([DocumentsDepartment3ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (5, 14, 4, 8, NULL, N'Operation_77004', N'Parameter 8', NULL, CAST(N'2017-10-27T14:06:20.303' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment3] ([DocumentsDepartment3ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (6, 14, 4, 9, NULL, N'Operation_77004', N'Parameter 9', NULL, CAST(N'2017-10-27T14:06:20.303' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment3] ([DocumentsDepartment3ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (7, 15, 4, 7, NULL, N'Operation_77004', N'Parameter 7', NULL, CAST(N'2017-10-27T14:06:24.100' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment3] ([DocumentsDepartment3ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (8, 15, 4, 8, NULL, N'Operation_77004', N'Parameter 8', NULL, CAST(N'2017-10-27T14:06:24.100' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment3] ([DocumentsDepartment3ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (9, 15, 4, 9, NULL, N'Operation_77004', N'Parameter 9', NULL, CAST(N'2017-10-27T14:06:24.100' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment3] ([DocumentsDepartment3ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (10, 16, 4, 7, NULL, N'Operation_77004', N'Parameter 7', NULL, CAST(N'2017-10-27T14:06:27.710' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment3] ([DocumentsDepartment3ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (11, 16, 4, 8, NULL, N'Operation_77004', N'Parameter 8', NULL, CAST(N'2017-10-27T14:06:27.710' AS DateTime))
INSERT [dbo].[tdbDocumentsDepartment3] ([DocumentsDepartment3ID], [MagazinesID], [OperationsID], [ParametersID], [Data1], [OperationsName], [Parameter], [Note], [DateRecord]) VALUES (12, 16, 4, 9, NULL, N'Operation_77004', N'Parameter 9', NULL, CAST(N'2017-10-27T14:06:27.710' AS DateTime))
SET IDENTITY_INSERT [dbo].[tdbDocumentsDepartment3] OFF
SET IDENTITY_INSERT [dbo].[tdbMagazines] ON 

INSERT [dbo].[tdbMagazines] ([MagazinesID], [UserID], [OperationsID], [NumberDocument], [DateDocument], [UserName], [Note], [DateRecord], [OperationsName], [OperationsCode]) VALUES (1, N'041bc654-dad0-44c5-ac37-3cdf8f787a1f', 1, N'01.10.2017/77001', CAST(N'2017-10-01T00:00:00.000' AS DateTime), N'admin', NULL, CAST(N'2017-10-02T08:23:29.390' AS DateTime), N'Operation_77001', N'77001')
INSERT [dbo].[tdbMagazines] ([MagazinesID], [UserID], [OperationsID], [NumberDocument], [DateDocument], [UserName], [Note], [DateRecord], [OperationsName], [OperationsCode]) VALUES (2, N'041bc654-dad0-44c5-ac37-3cdf8f787a1f', 1, N'02.10.2017/77001', CAST(N'2017-10-02T00:00:00.000' AS DateTime), N'admin', NULL, CAST(N'2017-10-03T08:24:40.377' AS DateTime), N'Operation_77001', N'77001')
INSERT [dbo].[tdbMagazines] ([MagazinesID], [UserID], [OperationsID], [NumberDocument], [DateDocument], [UserName], [Note], [DateRecord], [OperationsName], [OperationsCode]) VALUES (3, N'041bc654-dad0-44c5-ac37-3cdf8f787a1f', 1, N'03.10.2017/77001', CAST(N'2017-10-03T00:00:00.000' AS DateTime), N'admin', NULL, CAST(N'2017-10-04T08:10:10.290' AS DateTime), N'Operation_77001', N'77001')
INSERT [dbo].[tdbMagazines] ([MagazinesID], [UserID], [OperationsID], [NumberDocument], [DateDocument], [UserName], [Note], [DateRecord], [OperationsName], [OperationsCode]) VALUES (4, N'041bc654-dad0-44c5-ac37-3cdf8f787a1f', 1, N'04.10.2017/77001', CAST(N'2017-10-04T00:00:00.000' AS DateTime), N'admin', NULL, CAST(N'2017-10-05T08:25:20.390' AS DateTime), N'Operation_77001', N'77001')
INSERT [dbo].[tdbMagazines] ([MagazinesID], [UserID], [OperationsID], [NumberDocument], [DateDocument], [UserName], [Note], [DateRecord], [OperationsName], [OperationsCode]) VALUES (5, N'041bc654-dad0-44c5-ac37-3cdf8f787a1f', 2, N'01.10.2017/77002', CAST(N'2017-10-01T00:00:00.000' AS DateTime), N'admin', NULL, CAST(N'2017-10-02T08:31:35.200' AS DateTime), N'Operation_77002', N'77002')
INSERT [dbo].[tdbMagazines] ([MagazinesID], [UserID], [OperationsID], [NumberDocument], [DateDocument], [UserName], [Note], [DateRecord], [OperationsName], [OperationsCode]) VALUES (6, N'041bc654-dad0-44c5-ac37-3cdf8f787a1f', 2, N'02.10.2017/77002', CAST(N'2017-10-02T00:00:00.000' AS DateTime), N'admin', NULL, CAST(N'2017-10-03T08:42:21.397' AS DateTime), N'Operation_77002', N'77002')
INSERT [dbo].[tdbMagazines] ([MagazinesID], [UserID], [OperationsID], [NumberDocument], [DateDocument], [UserName], [Note], [DateRecord], [OperationsName], [OperationsCode]) VALUES (7, N'041bc654-dad0-44c5-ac37-3cdf8f787a1f', 2, N'03.10.2017/77002', CAST(N'2017-10-03T00:00:00.000' AS DateTime), N'admin', NULL, CAST(N'2017-10-04T08:10:51.490' AS DateTime), N'Operation_77002', N'77002')
INSERT [dbo].[tdbMagazines] ([MagazinesID], [UserID], [OperationsID], [NumberDocument], [DateDocument], [UserName], [Note], [DateRecord], [OperationsName], [OperationsCode]) VALUES (8, N'041bc654-dad0-44c5-ac37-3cdf8f787a1f', 2, N'04.10.2017/77002', CAST(N'2017-10-04T00:00:00.000' AS DateTime), N'admin', NULL, CAST(N'2017-10-05T08:22:45.170' AS DateTime), N'Operation_77002', N'77002')
INSERT [dbo].[tdbMagazines] ([MagazinesID], [UserID], [OperationsID], [NumberDocument], [DateDocument], [UserName], [Note], [DateRecord], [OperationsName], [OperationsCode]) VALUES (9, N'041bc654-dad0-44c5-ac37-3cdf8f787a1f', 3, N'01.10.2017/77003', CAST(N'2017-10-01T00:00:00.000' AS DateTime), N'admin', NULL, CAST(N'2017-10-02T08:27:58.233' AS DateTime), N'Operation_77003', N'77003')
INSERT [dbo].[tdbMagazines] ([MagazinesID], [UserID], [OperationsID], [NumberDocument], [DateDocument], [UserName], [Note], [DateRecord], [OperationsName], [OperationsCode]) VALUES (10, N'041bc654-dad0-44c5-ac37-3cdf8f787a1f', 3, N'02.10.2017/77003', CAST(N'2017-10-02T00:00:00.000' AS DateTime), N'admin', NULL, CAST(N'2017-10-03T08:27:58.940' AS DateTime), N'Operation_77003', N'77003')
INSERT [dbo].[tdbMagazines] ([MagazinesID], [UserID], [OperationsID], [NumberDocument], [DateDocument], [UserName], [Note], [DateRecord], [OperationsName], [OperationsCode]) VALUES (11, N'041bc654-dad0-44c5-ac37-3cdf8f787a1f', 3, N'03.10.2017/77003', CAST(N'2017-10-03T00:00:00.000' AS DateTime), N'admin', NULL, CAST(N'2017-10-04T08:27:59.630' AS DateTime), N'Operation_77003', N'77003')
INSERT [dbo].[tdbMagazines] ([MagazinesID], [UserID], [OperationsID], [NumberDocument], [DateDocument], [UserName], [Note], [DateRecord], [OperationsName], [OperationsCode]) VALUES (12, N'041bc654-dad0-44c5-ac37-3cdf8f787a1f', 3, N'04.10.2017/77003', CAST(N'2017-10-04T00:00:00.000' AS DateTime), N'admin', NULL, CAST(N'2017-10-05T08:28:00.313' AS DateTime), N'Operation_77003', N'77003')
INSERT [dbo].[tdbMagazines] ([MagazinesID], [UserID], [OperationsID], [NumberDocument], [DateDocument], [UserName], [Note], [DateRecord], [OperationsName], [OperationsCode]) VALUES (13, N'041bc654-dad0-44c5-ac37-3cdf8f787a1f', 4, N'01.10.2017/77004', CAST(N'2017-10-01T00:00:00.000' AS DateTime), N'admin', NULL, CAST(N'2017-10-02T08:30:04.537' AS DateTime), N'Operation_77004', N'77004')
INSERT [dbo].[tdbMagazines] ([MagazinesID], [UserID], [OperationsID], [NumberDocument], [DateDocument], [UserName], [Note], [DateRecord], [OperationsName], [OperationsCode]) VALUES (14, N'041bc654-dad0-44c5-ac37-3cdf8f787a1f', 4, N'02.10.2017/77004', CAST(N'2017-10-02T00:00:00.000' AS DateTime), N'admin', NULL, CAST(N'2017-10-03T08:30:05.190' AS DateTime), N'Operation_77004', N'77004')
INSERT [dbo].[tdbMagazines] ([MagazinesID], [UserID], [OperationsID], [NumberDocument], [DateDocument], [UserName], [Note], [DateRecord], [OperationsName], [OperationsCode]) VALUES (15, N'041bc654-dad0-44c5-ac37-3cdf8f787a1f', 4, N'03.10.2017/77004', CAST(N'2017-10-03T00:00:00.000' AS DateTime), N'admin', NULL, CAST(N'2017-10-04T08:30:05.773' AS DateTime), N'Operation_77004', N'77004')
INSERT [dbo].[tdbMagazines] ([MagazinesID], [UserID], [OperationsID], [NumberDocument], [DateDocument], [UserName], [Note], [DateRecord], [OperationsName], [OperationsCode]) VALUES (16, N'041bc654-dad0-44c5-ac37-3cdf8f787a1f', 4, N'04.10.2017/77004', CAST(N'2017-10-04T00:00:00.000' AS DateTime), N'admin', NULL, CAST(N'2017-10-05T08:30:06.357' AS DateTime), N'Operation_77004', N'77004')
SET IDENTITY_INSERT [dbo].[tdbMagazines] OFF
SET IDENTITY_INSERT [dbo].[tdbMainMenu] ON 

INSERT [dbo].[tdbMainMenu] ([MainMenuID], [ParentID], [MenuName], [MenuCaption], [PageRoute], [Icon], [ItemTypeInt], [Group1], [Group2], [OperationsIDStr]) VALUES (1, 0, N'Magazines', N'Magazines', NULL, NULL, 0, NULL, 1, NULL)
INSERT [dbo].[tdbMainMenu] ([MainMenuID], [ParentID], [MenuName], [MenuCaption], [PageRoute], [Icon], [ItemTypeInt], [Group1], [Group2], [OperationsIDStr]) VALUES (2, 0, N'About', N'About', N'/main/about', NULL, 1, NULL, 2, NULL)
INSERT [dbo].[tdbMainMenu] ([MainMenuID], [ParentID], [MenuName], [MenuCaption], [PageRoute], [Icon], [ItemTypeInt], [Group1], [Group2], [OperationsIDStr]) VALUES (3, 1, N'AllDocuments', N'AllDocuments', N'/main/magazinesroute/3', NULL, 1, NULL, 1, N'1;2;3;4')
INSERT [dbo].[tdbMainMenu] ([MainMenuID], [ParentID], [MenuName], [MenuCaption], [PageRoute], [Icon], [ItemTypeInt], [Group1], [Group2], [OperationsIDStr]) VALUES (4, 1, N'Document1', N'Document1', N'/main/magazinesroute/4', NULL, 1, NULL, 2, N'1')
INSERT [dbo].[tdbMainMenu] ([MainMenuID], [ParentID], [MenuName], [MenuCaption], [PageRoute], [Icon], [ItemTypeInt], [Group1], [Group2], [OperationsIDStr]) VALUES (5, 1, N'Document2', N'Document2', N'/main/magazinesroute/5', NULL, 1, NULL, 3, N'2')
INSERT [dbo].[tdbMainMenu] ([MainMenuID], [ParentID], [MenuName], [MenuCaption], [PageRoute], [Icon], [ItemTypeInt], [Group1], [Group2], [OperationsIDStr]) VALUES (6, 1, N'Document3', N'Document3', N'/main/magazinesroute/6', NULL, 1, NULL, 4, N'3')
INSERT [dbo].[tdbMainMenu] ([MainMenuID], [ParentID], [MenuName], [MenuCaption], [PageRoute], [Icon], [ItemTypeInt], [Group1], [Group2], [OperationsIDStr]) VALUES (7, 1, N'Document4', N'Document4', N'/main/magazinesroute/7', NULL, 1, NULL, 5, N'4')
SET IDENTITY_INSERT [dbo].[tdbMainMenu] OFF
SET IDENTITY_INSERT [dbo].[tdbOperations] ON 

INSERT [dbo].[tdbOperations] ([OperationsID], [OperationsName], [OperationsCaption], [OperationsCode], [Group1], [Group2]) VALUES (1, N'Operation_77001', N'Operation_77001', N'77001', NULL, 1)
INSERT [dbo].[tdbOperations] ([OperationsID], [OperationsName], [OperationsCaption], [OperationsCode], [Group1], [Group2]) VALUES (2, N'Operation_77002', N'Operation_77002', N'77002', NULL, 2)
INSERT [dbo].[tdbOperations] ([OperationsID], [OperationsName], [OperationsCaption], [OperationsCode], [Group1], [Group2]) VALUES (3, N'Operation_77003', N'Operation_77003', N'77003', NULL, 3)
INSERT [dbo].[tdbOperations] ([OperationsID], [OperationsName], [OperationsCaption], [OperationsCode], [Group1], [Group2]) VALUES (4, N'Operation_77004', N'Operation_77004', N'77004', NULL, 4)
SET IDENTITY_INSERT [dbo].[tdbOperations] OFF
SET IDENTITY_INSERT [dbo].[tdbOperationsParameters] ON 

INSERT [dbo].[tdbOperationsParameters] ([OperationsParametersID], [OperationsID], [ParametersID]) VALUES (1, 1, 1)
INSERT [dbo].[tdbOperationsParameters] ([OperationsParametersID], [OperationsID], [ParametersID]) VALUES (2, 1, 2)
INSERT [dbo].[tdbOperationsParameters] ([OperationsParametersID], [OperationsID], [ParametersID]) VALUES (3, 1, 3)
INSERT [dbo].[tdbOperationsParameters] ([OperationsParametersID], [OperationsID], [ParametersID]) VALUES (4, 1, 4)
INSERT [dbo].[tdbOperationsParameters] ([OperationsParametersID], [OperationsID], [ParametersID]) VALUES (5, 2, 1)
INSERT [dbo].[tdbOperationsParameters] ([OperationsParametersID], [OperationsID], [ParametersID]) VALUES (6, 2, 2)
INSERT [dbo].[tdbOperationsParameters] ([OperationsParametersID], [OperationsID], [ParametersID]) VALUES (7, 2, 3)
INSERT [dbo].[tdbOperationsParameters] ([OperationsParametersID], [OperationsID], [ParametersID]) VALUES (8, 2, 4)
INSERT [dbo].[tdbOperationsParameters] ([OperationsParametersID], [OperationsID], [ParametersID]) VALUES (9, 2, 5)
INSERT [dbo].[tdbOperationsParameters] ([OperationsParametersID], [OperationsID], [ParametersID]) VALUES (10, 2, 6)
INSERT [dbo].[tdbOperationsParameters] ([OperationsParametersID], [OperationsID], [ParametersID]) VALUES (11, 2, 7)
INSERT [dbo].[tdbOperationsParameters] ([OperationsParametersID], [OperationsID], [ParametersID]) VALUES (12, 3, 1)
INSERT [dbo].[tdbOperationsParameters] ([OperationsParametersID], [OperationsID], [ParametersID]) VALUES (13, 3, 7)
INSERT [dbo].[tdbOperationsParameters] ([OperationsParametersID], [OperationsID], [ParametersID]) VALUES (14, 3, 8)
INSERT [dbo].[tdbOperationsParameters] ([OperationsParametersID], [OperationsID], [ParametersID]) VALUES (15, 3, 9)
INSERT [dbo].[tdbOperationsParameters] ([OperationsParametersID], [OperationsID], [ParametersID]) VALUES (16, 3, 10)
INSERT [dbo].[tdbOperationsParameters] ([OperationsParametersID], [OperationsID], [ParametersID]) VALUES (17, 4, 7)
INSERT [dbo].[tdbOperationsParameters] ([OperationsParametersID], [OperationsID], [ParametersID]) VALUES (18, 4, 8)
INSERT [dbo].[tdbOperationsParameters] ([OperationsParametersID], [OperationsID], [ParametersID]) VALUES (19, 4, 9)
SET IDENTITY_INSERT [dbo].[tdbOperationsParameters] OFF
SET IDENTITY_INSERT [dbo].[tdbParameters] ON 

INSERT [dbo].[tdbParameters] ([ParametersID], [Parameter], [Note], [Group1], [Group2], [DateRecord]) VALUES (1, N'Parameter 1', NULL, NULL, NULL, CAST(N'2017-02-27T12:46:15.320' AS DateTime))
INSERT [dbo].[tdbParameters] ([ParametersID], [Parameter], [Note], [Group1], [Group2], [DateRecord]) VALUES (2, N'Parameter 2', NULL, NULL, NULL, CAST(N'2017-02-27T12:46:15.943' AS DateTime))
INSERT [dbo].[tdbParameters] ([ParametersID], [Parameter], [Note], [Group1], [Group2], [DateRecord]) VALUES (3, N'Parameter 3', NULL, NULL, NULL, CAST(N'2017-02-27T12:46:16.570' AS DateTime))
INSERT [dbo].[tdbParameters] ([ParametersID], [Parameter], [Note], [Group1], [Group2], [DateRecord]) VALUES (4, N'Parameter 4', NULL, NULL, NULL, CAST(N'2017-02-27T12:46:17.167' AS DateTime))
INSERT [dbo].[tdbParameters] ([ParametersID], [Parameter], [Note], [Group1], [Group2], [DateRecord]) VALUES (5, N'Parameter 5', NULL, NULL, NULL, CAST(N'2017-02-27T12:46:17.777' AS DateTime))
INSERT [dbo].[tdbParameters] ([ParametersID], [Parameter], [Note], [Group1], [Group2], [DateRecord]) VALUES (6, N'Parameter 6', NULL, NULL, NULL, CAST(N'2017-02-27T12:46:18.373' AS DateTime))
INSERT [dbo].[tdbParameters] ([ParametersID], [Parameter], [Note], [Group1], [Group2], [DateRecord]) VALUES (7, N'Parameter 7', NULL, NULL, NULL, CAST(N'2017-02-27T12:46:18.947' AS DateTime))
INSERT [dbo].[tdbParameters] ([ParametersID], [Parameter], [Note], [Group1], [Group2], [DateRecord]) VALUES (8, N'Parameter 8', NULL, NULL, NULL, CAST(N'2017-02-27T12:46:19.587' AS DateTime))
INSERT [dbo].[tdbParameters] ([ParametersID], [Parameter], [Note], [Group1], [Group2], [DateRecord]) VALUES (9, N'Parameter 9', NULL, NULL, NULL, CAST(N'2017-02-27T12:46:20.163' AS DateTime))
INSERT [dbo].[tdbParameters] ([ParametersID], [Parameter], [Note], [Group1], [Group2], [DateRecord]) VALUES (10, N'Parameter 10', NULL, NULL, NULL, CAST(N'2017-02-27T12:46:20.750' AS DateTime))
SET IDENTITY_INSERT [dbo].[tdbParameters] OFF
/****** Object:  StoredProcedure [dbo].[get_DocumentsDepartment1]    Script Date: 01.11.2017 8:55:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO






--Bronasco 261017

CREATE  PROCEDURE [dbo].[get_DocumentsDepartment1] @Id int

AS

SET NOCOUNT ON;

SELECT * 
FROM vtdbDocumentsDepartment1 a
WHERE a.MagazinesID = @Id
ORDER BY a.ParametersID;







GO
/****** Object:  StoredProcedure [dbo].[get_DocumentsDepartment2]    Script Date: 01.11.2017 8:55:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO






--Bronasco 261017

CREATE  PROCEDURE [dbo].[get_DocumentsDepartment2] @Id int

AS

SET NOCOUNT ON;

SELECT * 
FROM vtdbDocumentsDepartment2 a
WHERE a.MagazinesID = @Id
ORDER BY a.ParametersID;







GO
/****** Object:  StoredProcedure [dbo].[get_DocumentsDepartment3]    Script Date: 01.11.2017 8:55:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO






--Bronasco 261017

CREATE  PROCEDURE [dbo].[get_DocumentsDepartment3] @Id int

AS

SET NOCOUNT ON;

SELECT * 
FROM vtdbDocumentsDepartment3 a
WHERE a.MagazinesID = @Id
ORDER BY a.ParametersID;







GO
/****** Object:  StoredProcedure [dbo].[get_Magazines]    Script Date: 01.11.2017 8:55:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO





--Bronasco 261017

CREATE  PROCEDURE [dbo].[get_Magazines] @Id int

AS

SET NOCOUNT ON;

IF (@Id > 0)
BEGIN
SELECT * 
FROM vtdbMagazines a
WHERE a.MagazinesID = ISNULL(@Id, a.MagazinesID)
ORDER BY a.MagazinesID;
END;


IF (@Id = -2)
BEGIN
SELECT 
	@Id as MagazinesID,
	'' as UserID, 
	0 as OperationsID,
	'' as NumberDocument,
	GETDATE() as DateDocument,
	'' as UserName,
	'Document with entered date already exists' as Note,
	GETDATE() as DateRecord,
	'' as OperationsName,
	'' as OperationsCode
END;



GO
/****** Object:  StoredProcedure [dbo].[get_MagazinesList]    Script Date: 01.11.2017 8:55:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO






--Bronasco 271017

CREATE  PROCEDURE [dbo].[get_MagazinesList] @OperationsIDStr nvarchar(2000)

AS

SET NOCOUNT ON;

DECLARE @SQLQuery nvarchar(4000);

SET @OperationsIDStr = ISNULL(@OperationsIDStr, 'OperationsID')

SELECT @SQLQuery = N'SELECT * FROM vtdbMagazines ' +
'WHERE OperationsID in (' + @OperationsIDStr + ')' + ' ORDER BY MagazinesID';

EXECUTE sp_executesql 
	@SQLQuery; 






GO
/****** Object:  StoredProcedure [dbo].[get_MainMenu]    Script Date: 01.11.2017 8:55:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO




--Bronasco 261017

CREATE  PROCEDURE [dbo].[get_MainMenu] @Id int

AS

SET NOCOUNT ON;

SELECT * 
FROM vtdbMainMenu a
WHERE a.Id = ISNULL(@Id, a.Id)
ORDER BY a.Id;




GO
/****** Object:  StoredProcedure [dbo].[get_Operations]    Script Date: 01.11.2017 8:55:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO




--Bronasco 261017

CREATE  PROCEDURE [dbo].[get_Operations] @Id int

AS

SET NOCOUNT ON;

SELECT * 
FROM vtdbOperations a
WHERE a.Id = ISNULL(@Id, a.Id)
ORDER BY a.Id;




GO
/****** Object:  StoredProcedure [dbo].[set_DocumentsDepartment1]    Script Date: 01.11.2017 8:55:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO





--Bronasco 301017

CREATE   PROCEDURE [dbo].[set_DocumentsDepartment1] 	
						@DocumentsDepartment1ID int,
						@MagazinesID int,
						@OperationsID int,
						@ParametersID int,
						@Data1Str varchar(20),
						@Data2Str varchar(20),
						@Delete int  

AS

SET NOCOUNT ON;

DECLARE @output table (ID int);

DECLARE @Return int;
DECLARE @Data1 money, @Data2 money;
SELECT @Data1 = CONVERT(money, @Data1Str);
SELECT @Data2 = CONVERT(money, @Data2Str);

DECLARE @OperationsName varchar(50), @Parameter varchar(50);
SELECT @OperationsName = OperationsName FROM vtdbOperations WHERE Id = @OperationsID;
SELECT @Parameter = Parameter FROM tdbParameters WHERE ParametersID = @ParametersID;

IF(@DocumentsDepartment1ID IS NULL)
BEGIN
	INSERT INTO tdbDocumentsDepartment1 (MagazinesID, OperationsID, ParametersID,
		Data1, Data2, OperationsName, Parameter, DateRecord)
	OUTPUT INSERTED.DocumentsDepartment1ID INTO @output
	SELECT @MagazinesID, @OperationsID, @ParametersID,
		@Data1, @Data2, @OperationsName, @Parameter, GETDATE();

	SELECT @Return = MAX(ID) FROM @output;
	DELETE FROM @output;
END
ELSE
BEGIN
 IF(@Delete = 0)
 BEGIN
   UPDATE tdbDocumentsDepartment1
    SET Data1 = @Data1,
		Data2 = @Data2
    WHERE DocumentsDepartment1ID = @DocumentsDepartment1ID;

   SELECT @Return = @DocumentsDepartment1ID;
 END
 ELSE
 BEGIN
  IF(@Delete = 1) DELETE FROM tdbDocumentsDepartment1 WHERE DocumentsDepartment1ID = @DocumentsDepartment1ID;

  SELECT @Return = -1;
 END
END

SELECT @Return as ID









GO
/****** Object:  StoredProcedure [dbo].[set_DocumentsDepartment2]    Script Date: 01.11.2017 8:55:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO






--Bronasco 301017

CREATE   PROCEDURE [dbo].[set_DocumentsDepartment2] 	
						@DocumentsDepartment2ID int,
						@MagazinesID int,
						@OperationsID int,
						@ParametersID int,
						@Data1Str varchar(20),
						@Data2Str varchar(20),
						@Data3Str varchar(20),
						@Data4Str varchar(20),
						@Delete int  

AS

SET NOCOUNT ON;

DECLARE @output table (ID int);

DECLARE @Return int;
DECLARE @Data1 money, @Data2 money, @Data3 money, @Data4 money;
SELECT @Data1 = CONVERT(money, @Data1Str);
SELECT @Data2 = CONVERT(money, @Data2Str);
SELECT @Data3 = CONVERT(money, @Data3Str);
SELECT @Data4 = CONVERT(money, @Data4Str);

DECLARE @OperationsName varchar(50), @Parameter varchar(50);
SELECT @OperationsName = OperationsName FROM vtdbOperations WHERE Id = @OperationsID;
SELECT @Parameter = Parameter FROM tdbParameters WHERE ParametersID = @ParametersID;

IF(@DocumentsDepartment2ID IS NULL)
BEGIN
	INSERT INTO tdbDocumentsDepartment2 (MagazinesID, OperationsID, ParametersID,
		Data1, Data2, Data3, Data4, OperationsName, Parameter, DateRecord)
	OUTPUT INSERTED.DocumentsDepartment2ID INTO @output
	SELECT @MagazinesID, @OperationsID, @ParametersID,
		@Data1, @Data2, @Data3, @Data4, @OperationsName, @Parameter, GETDATE();

	SELECT @Return = MAX(ID) FROM @output;
	DELETE FROM @output;
END
ELSE
BEGIN
 IF(@Delete = 0)
 BEGIN
   UPDATE tdbDocumentsDepartment2
    SET Data1 = @Data1,
		Data2 = @Data2,
		Data3 = @Data3,
		Data4 = @Data4
    WHERE DocumentsDepartment2ID = @DocumentsDepartment2ID;

   SELECT @Return = @DocumentsDepartment2ID;
 END
 ELSE
 BEGIN
  IF(@Delete = 1) DELETE FROM tdbDocumentsDepartment2 WHERE DocumentsDepartment2ID = @DocumentsDepartment2ID;

  SELECT @Return = -1;
 END
END

SELECT @Return as ID









GO
/****** Object:  StoredProcedure [dbo].[set_DocumentsDepartment3]    Script Date: 01.11.2017 8:55:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO






--Bronasco 301017

CREATE   PROCEDURE [dbo].[set_DocumentsDepartment3] 	
						@DocumentsDepartment3ID int,
						@MagazinesID int,
						@OperationsID int,
						@ParametersID int,
						@Data1Str varchar(20),
						@Delete int  

AS

SET NOCOUNT ON;

DECLARE @output table (ID int);

DECLARE @Return int;
DECLARE @Data1 money;
SELECT @Data1 = CONVERT(money, @Data1Str);

DECLARE @OperationsName varchar(50), @Parameter varchar(50);
SELECT @OperationsName = OperationsName FROM vtdbOperations WHERE Id = @OperationsID;
SELECT @Parameter = Parameter FROM tdbParameters WHERE ParametersID = @ParametersID;

IF(@DocumentsDepartment3ID IS NULL)
BEGIN
	INSERT INTO tdbDocumentsDepartment3 (MagazinesID, OperationsID, ParametersID,
		Data1, OperationsName, Parameter, DateRecord)
	OUTPUT INSERTED.DocumentsDepartment3ID INTO @output
	SELECT @MagazinesID, @OperationsID, @ParametersID,
		@Data1, @OperationsName, @Parameter, GETDATE();

	SELECT @Return = MAX(ID) FROM @output;
	DELETE FROM @output;
END
ELSE
BEGIN
 IF(@Delete = 0)
 BEGIN
   UPDATE tdbDocumentsDepartment3
    SET Data1 = @Data1
    WHERE DocumentsDepartment3ID = @DocumentsDepartment3ID;

   SELECT @Return = @DocumentsDepartment3ID;
 END
 ELSE
 BEGIN
  IF(@Delete = 1) DELETE FROM tdbDocumentsDepartment3 WHERE DocumentsDepartment3ID = @DocumentsDepartment3ID;

  SELECT @Return = -1;
 END
END

SELECT @Return as ID









GO
/****** Object:  StoredProcedure [dbo].[set_Magazines]    Script Date: 01.11.2017 8:55:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER OFF
GO








--Bronasco 301017

CREATE    PROCEDURE [dbo].[set_Magazines] 	
					@MagazinesID int,
					@UserID nvarchar(450),
				 	@OperationsID int,
					@NumberDocument varchar(50),
					@DateDocumentStr varchar(10),
					@UserName varchar(50),
                    @Delete int  

AS

SET NOCOUNT ON;

DECLARE @output table (ID int);

DECLARE @Return int, @DateDocument datetime, @OperationsCode varchar(50), @OperationsName varchar(50);
SELECT @DateDocument = CONVERT(datetime, @DateDocumentStr, 104);

SELECT @OperationsCode = OperationsCode,
	@OperationsName = OperationsName
FROM vtdbOperations WHERE Id = @OperationsID;

IF(@MagazinesID IS NULL)
BEGIN
 IF (NOT EXISTS(SELECT MagazinesID FROM vtdbMagazines WHERE DateDocument = @DateDocument 
		and OperationsID = @OperationsID))
 BEGIN
	INSERT INTO tdbMagazines (UserID, OperationsID, NumberDocument, DateDocument, UserName, DateRecord,
		OperationsName, OperationsCode)
	OUTPUT INSERTED.MagazinesID INTO @output
	SELECT @UserID, @OperationsID, @NumberDocument, @DateDocument, @UserName, GETDATE(),
		@OperationsName, @OperationsCode;

	SELECT @Return = MAX(ID) FROM @output;
	DELETE FROM @output;
 END;
 ELSE
 BEGIN
  SET @Return = -2;
 END;
END;
ELSE
BEGIN
 IF(@Delete = 0)
 BEGIN
  IF (NOT EXISTS(SELECT MagazinesID FROM vtdbMagazines WHERE MagazinesID <> @MagazinesID
		  and (DateDocument = @DateDocument and OperationsID = @OperationsID)))
  BEGIN
   UPDATE tdbMagazines
    SET NumberDocument = @NumberDocument,
		DateDocument = @DateDocument
    WHERE MagazinesID = @MagazinesID;

   SELECT @Return = @MagazinesID;
  END;
  ELSE
  BEGIN
   SET @Return = -2;
  END;
 END
 ELSE
 BEGIN
  IF(@Delete = 1) DELETE FROM tdbMagazines WHERE MagazinesID = @MagazinesID;

  SELECT @Return = -1;
 END;
END;

SELECT @Return as ID;










GO
/****** Object:  Trigger [dbo].[MagazinesInsert_trigger]    Script Date: 01.11.2017 8:55:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
--Bronasco 261017

CREATE  TRIGGER [dbo].[MagazinesInsert_trigger] ON [dbo].[tdbMagazines] FOR INSERT

AS

DECLARE @MagazinesID int, @OperationsID int;
SELECT @MagazinesID = MagazinesID FROM inserted;
SELECT @OperationsID = OperationsID FROM inserted;

---------------------------tdbDocumentsDepartment1------------------------------
IF (@OperationsID in (1, 2))
BEGIN

INSERT tdbDocumentsDepartment1
(
	MagazinesID,
	OperationsID,
	ParametersID,
	OperationsName,
	Parameter,
	DateRecord
)
SELECT 
	@MagazinesID,
	@OperationsID,
	a.ParametersID,
	oper.OperationsName,
	a.Parameter,
	GETDATE()
FROM vtdbOperationsParameters a
	join tdbOperations oper on oper.OperationsID = @OperationsID
WHERE a.OperationsID = @OperationsID;

END;

---------------------------tdbDocumentsDepartment2------------------------------
IF (@OperationsID in (3))
BEGIN

INSERT tdbDocumentsDepartment2
(
	MagazinesID,
	OperationsID,
	ParametersID,
	OperationsName,
	Parameter,
	DateRecord
)
SELECT 
	@MagazinesID,
	@OperationsID,
	a.ParametersID,
	oper.OperationsName,
	a.Parameter,
	GETDATE()
FROM vtdbOperationsParameters a
	join tdbOperations oper on oper.OperationsID = @OperationsID
WHERE a.OperationsID = @OperationsID;

END;

---------------------------tdbDocumentsDepartment3------------------------------
IF (@OperationsID in (4))
BEGIN

INSERT tdbDocumentsDepartment3
(
	MagazinesID,
	OperationsID,
	ParametersID,
	OperationsName,
	Parameter,
	DateRecord
)
SELECT 
	@MagazinesID,
	@OperationsID,
	a.ParametersID,
	oper.OperationsName,
	a.Parameter,
	GETDATE()
FROM vtdbOperationsParameters a
	join tdbOperations oper on oper.OperationsID = @OperationsID
WHERE a.OperationsID = @OperationsID;

END;

GO
ALTER TABLE [dbo].[tdbMagazines] ENABLE TRIGGER [MagazinesInsert_trigger]
GO

----------------------------
UPDATE tdbMagazines
SET UserID =
(
SELECT Id FROM AspNetUsers
);
----------------------------

