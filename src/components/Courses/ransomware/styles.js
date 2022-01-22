import styled, { css } from "styled-components";
import colors from "constans/colors.js";
import {
  AiOutlineFile as FileIcon,
  AiOutlineMail as MailIcon,
  AiFillSecurityScan as AntivirusIcon
} from "react-icons/ai";
import {
  FaUser as UserIcon,
  FaLongArrowAltRight as ArrowIcon,
  FaFilter as FilterIcon,
  FaKey as KeyIcon,
  FaLock as LockIcon
} from "react-icons/fa";
import { BsLaptop as LaptopIcon } from "react-icons/bs";
import { IoIosApps as AppIcon } from "react-icons/io";
import {VscWorkspaceUntrusted as TrustIcon} from "react-icons/vsc"
import {MdBackup as BackupIcon} from "react-icons/md" 

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const FlexCenterWrapper = styled.div`
  ${flexCenter};
`

export const ContainerOneItem = styled(Container)`
  ${flexCenter};
`;

export const WrapperOneItem = styled.div`
  height: 100%;
  width: 100%;
`;

export const DownloadContainer = styled.ul`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  background-color: ${colors.grey};
  list-style: none;
  margin: 0;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  transition: 0.3s all ease-in-out;
  opacity: ${(props) => (props.active ? "100%" : "0")};
`;

export const DownloadItem = styled.li`
  border: 1px solid rgba(255, 255, 255, 0.6);
  padding: 10px 25px;
  height: 60%;
  display: flex;
  gap: 20px;
  cursor: ${(props) => (props.active ? "pointer" : "auto")};
`;

export const File = styled(FileIcon)`
  font-size: 25px;
`;

export const DownloadItemWrapper = styled.div`
  ${flexCenter};
  flex-direction: column;
`;
export const Header = styled.h5`
  font-size: 14px;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 11px;
  margin: 0;
`;

export const MailPageSidebar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  background-color: ${colors.mediumDarkPurple};
  z-index: 1;
  ${flexCenter};
  gap: 10px;
`;

export const Mail = styled(MailIcon)`
  font-size: 35px;
  color: ${colors.orange};
`;

export const MailPageHeader = styled.h3`
  font-size: 25px;
  color: ${colors.orange};
`;

export const MailContainer = styled(Container)`
  ${flexCenter};
`;

export const MailHeaderContainer = styled.div`
  height: 100px;
  width: 100%;
  box-sizing: border-box;
  background-color: #eee;
  padding: 10px;
  border-radius: 5px 5px 0 0;
`;

export const MailDetail = styled.p`
  margin: 0;
`;

export const MailWrapper = styled.div`
  width: 80%;
  height: 70%;
  background-color: #ccc;
  box-sizing: border-box;
  border-radius: 5px;
`;

export const MailBody = styled.div`
  padding: 25px;
`;

export const MailText = styled.p`
  font-size: 14px;
  color: ${colors.black};
`;

export const DownloadContainerHeader = styled.h4`
  font-size: 20px;
  font-weight: bold;
  margin-right: 25px;
`;

export const RunFileContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  ${flexCenter};
  flex-direction: column;
  opacity: ${(props) => (props.active ? "100%" : "0")};
  z-index: ${(props) => (props.active ? "100" : "-100")};
  transition: 0.3s all ease-in-out;
`;

export const RunFileWrapper = styled.div`
  width: 400px;
  background-color: ${colors.white};
  height: 130px;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const RunFileButton = styled.button`
  padding: 5px 15px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const DesktopContainer = styled(Container)`
  box-sizing: border-box;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: ${props => props.columns ? `repeat(${props.columns}, 1fr)` : 'repeat(3, 1fr)'};
  grid-template-rows: 1fr;
  padding: 15px;
`;

export const Button = styled.button`
  outline: none;
  background-color: ${(props) =>
    props.active ? colors.mediumDarkPurple : colors.darkestPurple};
  color: ${colors.white};
  cursor: pointer;
  border: 1px solid ${colors.darkPurple};
  box-sizing: border-box;
  font-size: 16px;
  transition: 0.2s all ease-in-out;
  &:hover {
    background-color: ${colors.mediumDarkPurple};
  }
`;

export const ContentWrapper = styled.div`
  height: calc(100% - 70px);
  padding: 15px;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 20% 80%;
`;

export const ContentHeader = styled.h3`
  font-size: 18px;
  text-align: center;
  color: ${colors.white};
  font-weight: normal;
  padding: 15px;
  margin: 0;
  opacity: 0.8;
`;

export const ContentBody = styled.div`
  ${flexCenter};
  position: relative;
`;

export const BadUser = styled(UserIcon)`
  color: red;
  font-size: 150px;
`;

export const Victim = styled(UserIcon)`
  position: ${(props) => (props.absolute ? `absolute` : "static")};
  color: ${colors.white};
  font-size: ${(props) => (props.small ? `50px` : "150px")};
`;

export const Arrow = styled(ArrowIcon)`
  color: red;
  font-size: 100px;
  transform: ${(props) =>
    props.rotate ? `rotate(${props.rotate}deg)` : "rotate(0)"};
  position: ${(props) => (props.absolute ? `absolute` : "static")};
`;

export const RelativeContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

export const Laptop = styled(LaptopIcon)`
  font-size: 150px;
  color: ${colors.white};
`;

export const BadMail = styled(MailIcon)`
  font-size: 80px;
  color: red;
  margin: 15px;
`;

export const App = styled(AppIcon)`
  color: ${colors.white};
  font-size: 150px;
`;

export const ContainerColumn = styled(ContainerOneItem)`
  flex-direction: column;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 50%;
  height: 30%;
`;

export const Filter = styled(FilterIcon)`
  font-size: 150px;
  color: ${colors.orange};
  margin: 25px 0;
`;

const file = css`
  position: absolute;
  bottom: 0;
  left: ${(props) => (props.x ? `${props.x}%` : "0")};
  bottom: ${(props) => (props.y ? `${props.y}%` : "0")};
  transform: ${(props) => (props.z ? `rotate(${props.z}deg)` : "rotate(0)")};
  font-size: 50px;
`;

export const BadFile = styled(FileIcon)`
  color: red;
  ${file};
`;

export const GoodFile = styled(FileIcon)`
  color: ${colors.lightGreen};
  ${file};
`;

export const Key = styled(KeyIcon)`
font-size: 50px;
color: ${(props) => (props.color ? `${props.color}` : "red")};
`

export const Lock = styled(LockIcon)`
font-size: 50px;
color: ${colors.white};
`
export const ItemsColumnWrapper = styled.div`
height: 100px;
display: flex;
flex-direction: column;
gap: 15px;
`

export const ColumnFixedWrapper = styled.div`
display: flex;
flex-direction: column;
width: 250px;
`

export const ItemDescription = styled.p`
font-size: 14px;
color: ${colors.white};
`

export const Trust = styled(TrustIcon)`
color: ${colors.red};
font-size: 60px;
`

export const Backup = styled(BackupIcon)`
font-size: 60px;
color: ${colors.white};
`

export const Antivirus = styled(AntivirusIcon)`
font-size: 60px;
color: ${colors.white};
`