describe('login', () => {
	it('user should be able to login with valid credential', () => {
		cy.visit("https://kasirdemo.belajarqa.com")
		cy.get('#email').type('enolabilqis@yahoo.com');
		cy.get('#password').type('enola123');
		cy.get('.chakra-button').click()
		cy.wait (4000);
	    cy.url().should('include','/dashboard')
     	cy.wait(5000);	
		cy.xpath('//*[@id="root"]/div/div/div[1]/div/a[5]/div/div/div').click().wait(5000);;
		cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/a').click().wait(5000);;
		cy.get('#nama').type('perhiasan');
		cy.get('.chakra-button').click().wait(5000);
		cy.xpath('//*[@id="root"]/div/div/div[1]/div/a[6]/div/div/div').click().wait(3000);{
			cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/a').click().wait(3000);;
			cy.get('#nama').type('cincin').wait(1000);
			cy.get('#deskripsi').type('perhiasan').wait(1000);
			cy.xpath('//*[@id="harga beli"]').type(110000).wait(1000);
			cy.xpath('//*[@id="harga jual"]').type(115000).wait(1000);
			cy.xpath('//*[@id="stok"]').type(15).wait(1000);
			cy.xpath('//*[@id="kategori"]').click().wait(5000);
			cy.get('table').find('tbody').find('td').eq(1).click().wait(5000);
			cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/button', { multiple: true }).click().wait(5000);
		}


		cy.xpath('//*[@id="root"]/div/div/div[1]/div/a[7]/div/div/div').click().wait(5000);{
			cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/a').click().wait(5000);;
			cy.get('#nama').type('Kenzo').wait(1000);
			cy.get('#email').type('Kenzo@sglider.co.id').wait(1000);
			cy.get('#password').type('Kenzo');
			cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/button', { multiple: true }).click().wait(5000);

			}
		
			cy.xpath('//*[@id="root"]/div/div/div[1]/div/a[8]/div/div/div').click().wait(5000);;
			cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/a').click().wait(3000);;
			cy.get('#nama').type('enlblqsh');
			cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/div[2]').type('3287913185');
			cy.get('#alamat').type('Patal');
			cy.get('#keterangan').type('langganan');
			cy.get('.chakra-button').click().wait(2000);
			cy.xpath('//*[@id="root"]/div/div/div[1]/div/a[4]').click().wait(4000);;
			cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/a').click().wait(3000);;
			cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div/div[2]/div[2]/div[1]/button').click().wait(3000);
			cy.get('table').find('tbody').find('td').eq(3).click().wait(5000);
			cy.get('svg[aria-hidden="true"][data-icon="times"]')
	  .click();
	cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div/div[2]/div[2]/div[1]/button').click().wait(3000);
			cy.get('table').find('tbody').find('td').eq(6).click().wait(5000);
			cy.xpath('//*[@id="root"]/div/div/div[1]/div/a[3]/div').click().wait(2000);
	    })
})