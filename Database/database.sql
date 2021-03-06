CREATE TABLE [dbo].[UserImages](
	[ImageId] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NULL,
	[Label] [varchar](40) NULL,
	[Description] [varchar](150) NULL,
	[Size] [int] NULL,
	[Url] [varchar](250) NULL,
	[MimeType] [nchar](40) NULL,
	[BinaryData] [varbinary](max) NULL,
	[ImageData] [image] NULL,
	[IsActive] [bit] NULL,
	[DateCreated] [date] NULL,
 CONSTRAINT [PK_Images] PRIMARY KEY CLUSTERED 
(
	[ImageId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
