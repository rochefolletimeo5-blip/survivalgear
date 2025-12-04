export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Conditions Générales de Vente</h1>
      
      <div className="prose max-w-none space-y-6 text-gray-700">
        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">1. Objet</h2>
          <p>
            Les présentes conditions générales de vente (CGV) régissent les ventes de produits effectuées sur le site 
            SurvivalGear.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">2. Prix</h2>
          <p>
            Les prix de nos produits sont indiqués en euros toutes taxes comprises (TVA et autres taxes applicables). 
            SurvivalGear se réserve le droit de modifier ses prix à tout moment.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">3. Commandes</h2>
          <p>
            Toute commande passée sur le site constitue la formation d'un contrat conclu à distance entre vous et 
            SurvivalGear. La vente ne sera considérée comme définitive qu'après l'envoi de la confirmation de commande 
            par email et l'encaissement de l'intégralité du prix.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">4. Paiement</h2>
          <p>
            Le paiement s'effectue par carte bancaire ou PayPal. Les transactions sont sécurisées et les données 
            bancaires ne sont pas stockées sur nos serveurs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">5. Livraison</h2>
          <p>
            Les délais de livraison sont estimés à 2 semaines à compter de la validation de votre commande. 
            SurvivalGear ne peut être tenu responsable des retards de livraison dus à des circonstances indépendantes 
            de sa volonté.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">6. Droit de rétractation</h2>
          <p>
            Conformément à la législation européenne, vous disposez d'un délai de 14 jours à compter de la réception 
            de votre commande pour exercer votre droit de rétractation sans avoir à justifier de motifs ni à payer de 
            pénalités. Les frais de retour sont à votre charge.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">7. Garanties</h2>
          <p>
            Tous nos produits bénéficient de la garantie légale de conformité et de la garantie des vices cachés, 
            prévues par les articles 1641 et suivants du Code civil.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">8. Responsabilité</h2>
          <p>
            SurvivalGear ne peut être tenu responsable de l'inexécution du contrat en cas de force majeure, perturbation 
            ou grève totale ou partielle des services postaux ou moyens de transport utilisés.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">9. Données personnelles</h2>
          <p>
            Les informations collectées font l'objet d'un traitement informatique destiné à la gestion des commandes. 
            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">10. Litiges</h2>
          <p>
            Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée 
            avant toute action judiciaire. À défaut, les tribunaux français seront seuls compétents.
          </p>
        </section>
      </div>
    </div>
  )
}
