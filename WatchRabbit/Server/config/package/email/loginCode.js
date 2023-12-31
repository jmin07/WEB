const templateHTML = ({ email, randomNumber }) => {
    return `
        <!DOCTYPE html
            PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">

        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <title align="center">회원가입 코드 발송</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>

        <body style="margin: 0; padding: 0;">
            <table align="center" border="1" cellpadding="0" cellspacing="0" width="800" style="border-collapse: collapse;">
                <tr>
                    <td align="center" bgcolor="#F9F2EA" style="padding: 10px 0 10px 0;">
                        <a style="color: #FF803D; font-size: 80px; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">Watch</a>
                        <a style="color: #357A38; font-size: 80px; font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif">Rabbit</a>
                        <img src="https://watchrabbit.s3.ap-northeast-2.amazonaws.com/carrot+(1).png" alt="WatchRabbit_carrot" width="100" height="80" />
                    </td>
                </tr>
                <tr>
                    <td bgcolor="#ffffff" style="padding: 10px 20px 10px 20px;">
                        <table border="1" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td style="font-size:20px" align="center">
                                    당신의 현명한 중고 거래 도움 사이트 
                                    <h2> Watch Rabbit</h2>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 20px 10px 30px 0;" align="center">
                                    <h2 style="font-size:30px">회원가입 인증번호 안내.</h2><br/>
                                    <p style="font-size:20px">회원가입 이메일 : ${email}</p>
                                    <p style="font-size:20px">회원가입 인증번호는 [<b>${randomNumber}</b>] 입니다.</p><br/>
                                    안녕하세요. 당근마켓을 더 편리하게 도와드리는 WatchRabbit입니다.<br/>
                                    회원가입코드를 사이트에 입력하여 회원가입해주세요.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <table border="1" cellpadding="0" cellspacing="0" width="100%">
                                        <tr>
                                            <td width="260" valign="top">
                                                <table border="1" cellpadding="0" cellspacing="0" width="100%">
                                                    <tr>
                                                        <td>
                                                            <img src="https://watchrabbit.s3.ap-northeast-2.amazonaws.com/exchangeImage.jpg" alt="" width="100%" height="100%"
                                                                style="display: block;" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left" height="100%" width="100%">
                                                            <p>
                                                                WatchRabbit은 당근마켓을 이용하는 고객들을 돕기 위하여 설계된 사이트입니다. </br>
                                                                막연한 중고가격를 생각하신다면 WatchRabbit을 통해서 가격정보와 매물현황을 파악할 수 있습니다.
                                                                지금 사이트의 기능을 누리세요.
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td style="font-size: 0; line-height: 0;" width="20">
                                                &nbsp;
                                            </td>
                                            <td width="260" valign="top">
                                                <table border="1" cellpadding="0" cellspacing="0" width="100%">
                                                    <tr>
                                                        <td>
                                                            <img src="https://watchrabbit.s3.ap-northeast-2.amazonaws.com/DBinformaionImage.jpeg" alt="" width="100%" height="100%"
                                                                style="display: block;" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td align="left" height="100%" width="100%">
                                                            <p>
                                                                WatchRabbit이 중고거래를 돕는 방법은 중고거래 플랫폼인 당근마켓의 데이터를 수집하고 정리하여 알려드는 것입니다. </br>
                                                                누적된 정보와 현재 정보를 보고 적정한 거래시기와 적정한 가격을 예측할 수 있습니다.
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="center" bgcolor="#F9F2EA" style="padding: 30px 30px 30px 30px;">
                        <table border="1" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                중고플랫폼 당근마켓을 더 현명하게 사용하는 방법을 제시합니다. <br/>
                                &reg; WatchRabbit, Korea 2022
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            </body>
        </html>
    `;
};

module.exports = templateHTML;
